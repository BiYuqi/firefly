const { isValid } = require('mongoose').Types.ObjectId
const Group = require('../models/group')
const User = require('../models/user')
const Message = require('../models/message')
// const Socket = require('../models/socket')
const xss = require('xss')

// const FirstFetchMsgCount = 20
// const EachFetchMsgCount = 40

const sendMessage = async (socket) => {
  const groups = await Group.find({isDefault: true})
  socket.join(groups._id)
  socket.on('msg', async (data) => {
    const { to, from, type, content } = data

    let groupId = ''
    let messageContent = xss(content)
    if (isValid(to)) {
      groupId = to
    }
    let message
    try {
      message = await Message.create({
        from: from,
        to,
        type,
        content: content
      })
    } catch (e) {}

    const user = await User.findOne({_id: from})
    const messageData = {
      _id: message._id,
      createTime: message.createTime,
      from: user.toObject(),
      to,
      type,
      content: messageContent
    }
    socket.to(groupId).emit('message', messageData)
    socket.emit('message', messageData)
  })
}

module.exports = sendMessage
