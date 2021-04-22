import Vue from 'vue'
import Vuex from 'vuex'
import createPersistentState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {username: ''}
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
  },
  plugins: [createPersistentState()]
})
