module.exports = {
  port: '8976',

  // mongodb server
  db: 'mongodb://localhost:27017/firefly',

  // session secret
  sessionSecret: 'firefly',

  // group
  defaultGroupName: 'firefly',
  defaultGroupAvatar: '/static/avatar/0.jpg',
  maxGroupCount: 3,

  // jwt secret
  jwtSecret: 'firefly',
  jwtTime: '24h',

  // redis
  redisHost: '127.0.0.1',
  redisPort: 6379,
  redisDb: 0,
  redisPassword: '',

  // qiniu
  qiniuAccessKey: 'your access key',
  qiniuSecretKey: 'your secret key',
  qiniuBucket: 'your bucket name',
  qiniuOrigin: 'http://your qiniu domain'
}
