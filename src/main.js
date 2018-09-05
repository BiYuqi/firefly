import Vue from 'vue'
import io from 'socket.io-client'

import SvgIcon from '@/components/SvgIcon'
import App from './App'
import router from './router'
import store from './store'

import '@/utils/element'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/main.css'

Vue.component('svg-icon', SvgIcon)
Vue.config.productionTip = false
// test socket.io connect
io('http://localhost:8976')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
