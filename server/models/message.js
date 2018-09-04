const mongoose = require('mongoose')
const Schema = mongoose.Schema

const message = new Schema({
  createTime: {
    type: Date,
    default: Date.now,
    index: true
  },
  from: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  to: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  type: {
    type: String,
    enum: ['text', 'image', 'code', 'invite'],
    default: 'text'
  },
  content: {
    type: String,
    default: ''
  }
})
module.exports = mongoose.model('message', message)
