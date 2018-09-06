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
    match: /^(?=.*?[0-9])(?=.*?[a-z])[0-9a-z]{8, }$/
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
