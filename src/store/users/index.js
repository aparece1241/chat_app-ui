export default {
    namespaced: true,
    state: {
        users: [],
        user: {},
        onlineUsers: [],
    },
    getters: {
        getOnlineUsers(state) {
            return state.onlineUsers;
        }
    },
    mutations: {},
    actions: {}
}
