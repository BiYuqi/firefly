const jwt = require('jsonwebtoken')
const User = require('../models/user')
const Group = require('../models/group')
const Socket = require('../models/socket')
const config = require('../config/config')

/**
 * 用户注册信息
 * @method register
 * @param {*} req
 * @param {*} res
 */
const register = async (req, res) => {
  const {username, password} = req.body
  if (!username || !password) {
    return res.send({
      msg: '用户名账号, 密码不能为空'
    })
  }
  const user = await User.findOne({ username })
  if (user) {
    return res.send({
      code: '412',
      msg: '用户名重复, 请重新填写'
    })
  }
  const newUser = await User.create({ username, password })
  if (!newUser) {
    return res.send({
      code: '500',
      msg: '创建账号失败，请重新创建'
    })
  }

  const group = await Group.findOne({ isDefault: true })
  if (group) {
    group.members.push(newUser)
    await group.save()
  }
  res.send({
    data: {
      id: newUser._id,
      avatar: newUser.avatar,
      username: newUser.username,
      groups: [
        {
          id: group._id,
          name: group.name,
          avatar: group.avatar,
          creator: group.creator,
          createTime: group.createTime,
          message: []
        }
      ],
      friends: [],
      isAdmin: false
    },
    msg: '注册成功, 请登录',
    code: 200
  })
}

/**
 * 用户登录
 * @param {*} req
 * @param {*} res
 */
const login = async (req, res) => {
  const {username, password, os, browser, description} = req.body
  if (!username || !password) {
    return res.send({
      msg: '请输入用户名账号, 密码'
    })
  }
  const user = await User.findOne({ username })
  if (!user) {
    return res.send({
      code: '404',
      msg: '找不到该用户'
    })
  }
  if (username !== user.username) {
    return res.send({
      msg: '用户名有误'
    })
  }
  if (password !== user.password) {
    return res.send({
      msg: '用户密码有误, 请重新输入'
    })
  }
  user.lastLoginTime = Date.now()
  await user.save()

  const groups = await Group.find({members: user})
  groups.forEach((group) => {
    global.socket.join(group._id)
  })

  const info = Object.assign({}, req.body, {loginAt: +new Date()})
  // 过期时间2小时
  const token = jwt.sign(info, config.jwtSecret, {expiresIn: config.jwtTime})

  await Socket.findOneAndUpdate({id: global.socket}, {
    user: user._id,
    os,
    browser,
    description
  })
  return res.send({
    data: {
      _id: user._id,
      avatar: user.avatar,
      username: user.username,
      groups
    },
    token,
    code: 200,
    msg: '收到登陆请求, 正在陆续开发中...'
  })
}
module.exports = {
  register,
  login
}
