export default {
    namespaced: true,
    
    state: {
        users: [],
        onlineUsers: [],
    },

    getters: {
        getOnlineUsers(state) {
            return state.onlineUsers;
        }
    },

    mutations: {
        setOnlineUsers( state, onlineUsers ) {
            state.onlineUsers = onlineUsers;
        }
    },

    actions: {}
}
