const express = require('express')
const socket = require('socket.io')
const cors = require('cors')

const app = express()
const server = require('http').createServer(app)
const io = socket(server)

app.use(cors)

io.on('connection', (socket) => {
  console.log('有人连接socket', 'socket-id', socket.id)
})

module.exports = server
