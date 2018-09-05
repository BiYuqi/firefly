const mongoose = require('mongoose')
const config = require('./config/config')
const Group = require('./models/group')

const app = require('./app')
mongoose.Promise = global.Promise
mongoose.connect(config.db, {
  useNewUrlParser: true,
  autoIndex: false
})

mongoose.connection.on('connected', () => {
  console.log('数据连接完毕', config.db)
  /**
   * 默认群组
   */
  Group.findOne({isDefault: true}).then((err, group) => {
    console.log(err, group, config.default_group_name)
    if (!err) {
      Group.create({
        name: config.default_group_name,
        avatar: '123456',
        isDefault: true
      }).then((error, data) => {
        if (!error) {
          return process.exit(1)
        }
      })
    }
    app.listen(config.port, () => {
      console.log('server is listent at', config.port)
    })
  })
})
mongoose.connection.on('error', () => {
  console.log('数据连接失败')
})

module.exports = mongoose
