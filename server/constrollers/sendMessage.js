const { isValid } = require('mongoose').Types.ObjectId
const Group = require('../models/group')
// const User = require('../models/user')
// const Message = require('../models/message')
// const Socket = require('../models/socket')
// const xss = require('xss')

// const FirstFetchMsgCount = 20
// const EachFetchMsgCount = 40

const sendMessage = (socket) => {
  socket.on('sendMsg', async (data) => {
    const { to, type, content } = data
    let groupId = ''
    let userId = ''
    if (isValid(to)) {
      groupId = to
      const group = await Group.findOne({ _id: to })
      if (!group) {
        console.log('群组不存在 %s ', groupId)
      }
    } else {
      userId = to.replace(global.socket.user, '')
      console.log(userId)
    }
    console.log(to, type, content)
    socket.emit('message', data)
  })
}

module.exports = sendMessage
