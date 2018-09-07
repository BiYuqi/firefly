const express = require('express')
const socket = require('socket.io')
const bodyParser = require('body-parser')
// const cookieParse = require('cookie-parser')

const app = express()
const server = require('http').createServer(app)
const io = socket(server)

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

const rouerIndex = require('./routes/user')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
// app.use(cookieParse())

// router
app.use('/system', rouerIndex)

io.on('connection', (socket) => {
  global.socket = socket
  console.log('有人连接socket', 'socket-id', socket.id)
})

module.exports = server
