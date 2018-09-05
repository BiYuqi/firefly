import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isLogin: true,
  connect: false
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
