import Vue from 'vue'
import {
  Dialog,
  Input,
  Checkbox,
  Switch,
  Button,
  Tabs,
  TabPane,
  Tooltip,
  Form,
  Radio,
  RadioGroup,
  FormItem,
  ColorPicker,
  Upload,
  Message
} from 'element-ui'

Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Dialog)
Vue.use(Button)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(ColorPicker)
Vue.use(Upload)
Vue.prototype.$message = Message
