const express = require('express')
const socket = require('socket.io')
const bodyParser = require('body-parser')
// const cookieParse = require('cookie-parser')

const app = express()
const server = require('http').createServer(app)
const io = socket(server)
const checkToken = require('./middleware/checkToken')
const rouerUser = require('./routes/user')
const routerGroup = require('./routes/group')

const Socket = require('./models/socket')
const Group = require('./models/group')
const sendMessage = require('./constrollers/sendMessage')

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  res.header('X-Powered-By', 'XMLHttpRequest')
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  } else {
    next()
  }
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
// app.use(cookieParse())

app.use(checkToken)

// router
app.use('/system', rouerUser)
app.use('/group', routerGroup)

io.on('connection', async (socket) => {
  global.socket = socket
  await Socket.create({
    id: socket.id,
    ip: socket.request.connection.remoteAddress
  })
  sendMessage(socket)
  socket.on('disconnect', async () => {
    await Socket.findOneAndRemove({id: socket.id})
    console.log('有人断开连接 socket-id', socket.id)
  })
})

module.exports = server
