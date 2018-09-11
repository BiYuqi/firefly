import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'js-cookie'

Vue.use(Vuex)

const state = {
  isLogin: true,
  connect: false,
  hasToken: Cookie.get('ut') || '',
  currentGroup: '',
  groupList: Cookie.get('uinfo') || [],
  userId: (Cookie.get('uinfo') && JSON.parse(Cookie.get('uinfo'))._id) || ''
}
const mutations = {
  setConnect (state, res) {
    state.connect = res
  },
  setToken (state, res) {
    state.hasToken = res || Cookie.get('ut')
  }
}
const store = new Vuex.Store({
  state,
  mutations
})

export default store
