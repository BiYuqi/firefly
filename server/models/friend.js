const mongoose = require('mongoose')
const Schema = mongoose.Schema

const friend = new Schema({
  createTime: {
    type: Date,
    default: Date.now,
    index: true
  },
  from: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    index: true
  },
  to: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
})
module.exports = mongoose.model('friend', friend)
