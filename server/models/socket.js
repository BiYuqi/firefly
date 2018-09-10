const mongoose = require('mongoose')
const Schema = mongoose.Schema
const socket = new Schema({
  createTime: {
    type: Date,
    default: Date.now
  },
  id: {
    type: String,
    unique: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  ip: {
    type: String
  },
  os: {
    type: String,
    default: ''
  },
  browser: {
    type: String,
    default: ''
  },
  environment: {
    type: String,
    default: ''
  }
})
module.exports = mongoose.model('socket', socket)
