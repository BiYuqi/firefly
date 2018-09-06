const User = require('../models/user')

/**
 * 用户注册信息
 * @method register
 * @param {*} req
 * @param {*} res
 */
const register = (req, res) => {
  const {username, password} = req.body
  console.log(username, password)
  res.send({
    msg: '收到注册请求, 正在陆续开发中...'
  })
}

/**
 * 用户登录
 * @param {*} req
 * @param {*} res
 */
const login = (req, res) => {
  const {username, password} = req.body
  console.log(username, password)
  res.send({
    msg: '收到登陆请求, 正在陆续开发中...'
  })
}
module.exports = {
  register,
  login
}
