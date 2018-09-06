import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'js-cookie'

Vue.use(Vuex)

const state = {
  isLogin: true,
  connect: false,
  hasToken: localStorage.getItem('token') || Cookie.get('token') || ''
}
const mutations = {
  setConnect (state, res) {
    state.connect = res
  }
}
const store = new Vuex.Store({
  state,
  mutations
})

export default store
