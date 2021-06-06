import Vue from 'vue'
import Vuex from 'vuex'
import createPersistentState from 'vuex-persistedstate';

// Import modules
import UserModule from './users/index'
import AuthModule from './auth/index'
import MessageModule from './message/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    UserModule,
    AuthModule,
    MessageModule
  },
  plugins: [createPersistentState()]
})

/**  state: {
    user: {username: ''},
  },
  getters: {
    getUserState(state) {
      return state.user;
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
  }, */
