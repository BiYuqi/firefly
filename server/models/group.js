const mongoose = require('mongoose')
const Schema = mongoose.Schema

const group = new Schema({
  createTime: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    trim: true,
    match: /^[0-9a-zA-Z]{4,16}$/,
    unique: true
  },
  avatar: {
    type: String
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  isDefault: {
    type: Boolean,
    default: false
  },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user'
    }
  ]
})
module.exports = mongoose.model('group', group)
