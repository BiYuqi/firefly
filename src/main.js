import Vue from 'vue'
import {
  Dialog,
  Input,
  Checkbox,
  Switch,
  Button,
  Tooltip,
  Form,
  Radio,
  RadioGroup,
  FormItem,
  Message
} from 'element-ui'
import SvgIcon from '@/components/SvgIcon'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Dialog)
Vue.use(Button)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.component('svg-icon', SvgIcon)
Vue.prototype.$message = Message
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
