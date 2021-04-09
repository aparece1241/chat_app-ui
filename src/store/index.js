import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {username: 'harapa'}
  },
  getters: {
    getUserState(state) {
      return state.user;
    }
  },
  mutations: {
    setUserState(state, user) {
      state.user = user;
    }
  },
  actions: {
  },
  modules: {
  }
})
