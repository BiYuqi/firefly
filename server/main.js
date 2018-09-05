const mongoose = require('mongoose')
const config = require('./config/config')
const Group = require('./models/group')

const app = require('./app')
mongoose.Promise = global.Promise
mongoose.connect(config.db, {
  useNewUrlParser: true,
  autoIndex: false
})

mongoose.connection.on('connected', async () => {
  console.log('数据连接完毕', config.db)
  /**
   * 查询默认群组
   */
  const group = await Group.findOne({isDefault: true})
  if (!group) {
    /**
     * 创建默认群组
     */
    const createGroup = await Group.create({
      name: config.defaultGroupName,
      avatar: config.defaultGroupAvatar,
      isDefault: true
    })
    if (!createGroup) {
      console.log(`Create group error ${createGroup}`)
      return process.exit(1)
    }
  } else {
    console.log(`Create defaultGroup success ${group}`)
  }
  // Start server
  app.listen(config.port, () => {
    console.log(`server is listent at ${config.port}`)
  })
})
mongoose.connection.on('error', () => {
  console.log('数据连接失败')
})

module.exports = mongoose
