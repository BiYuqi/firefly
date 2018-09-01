// 为了直接使用名字就能引入svg，需要做一些过滤
const files = require.context('./svg', true, /\.svg$/)

const modules = {}

files.keys().forEach((key) => {
  modules[key.replace(/(\.\/|\.svg)/g, '')] = files(key)
})
export default modules
