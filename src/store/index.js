import Vue from 'vue'
import Vuex from 'vuex'
import createPersistentState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {username: ''},
    socket: {}
  },
  getters: {
    getUserState(state) {
      return state.user;
    },
    getSocketState(state) {
      return state.socket;
    } 
  },
  mutations: {
    setUserState(state, user) {
      state.user = user;
    },
    setSocketState(state, socket) {
      state.socket = socket;
    } 
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistentState()]
})
