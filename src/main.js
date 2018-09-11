import Vue from 'vue'

import SvgIcon from '@/components/SvgIcon'
import App from './App'
import router from './router'
import store from './store'
import socket from '@/utils/socket'

import '@/utils/element'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/main.css'

Vue.component('svg-icon', SvgIcon)
// test socket.io connect
socket.on('connect', function () {
  console.log('socket连接成功')
  store.commit('setConnect', true)
})

socket.on('disconnect', () => {
  console.log('socket连接失败')
  store.commit('setConnect', false)
})
Vue.config.productionTip = false
Vue.prototype.sockets = socket
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
