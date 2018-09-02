import Vue from 'vue'

import SvgIcon from '@/components/SvgIcon'
import App from './App'
import router from './router'

import '@/utils/element'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/main.css'

Vue.component('svg-icon', SvgIcon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
