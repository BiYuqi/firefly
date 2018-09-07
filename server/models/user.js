const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user = new Schema({
  createTime: {
    type: Date,
    default: Date.now
  },
  lastLoginTime: {
    type: Date,
    default: Date.now
  },
  username: {
    type: String,
    trim: true,
    unique: true,
    match: /^([\u4e00-\u9fa5]|[_a-zA-Z0-9]){4,16}$/
  },
  password: {
    type: String
  },
  avatar: {
    type: String
  },
  expression: {
    type: String
  }
})

module.exports = mongoose.model('user', user)
