import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/views/DashBoard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashBoard
    }
  ]
})
