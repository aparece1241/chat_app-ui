import apiHelper from '../../helper/apiHelper'

export default {
    namespaced: true,
    
    state: {
        users: [],
        onlineUsers: [],
    },

    getters: {
        getOnlineUsers(state) {
            return state.onlineUsers;
        },
        getAllUsers(state) {
            return state.users;
        }
    },

    mutations: {
        setOnlineUsers( state, onlineUsers ) {
            state.onlineUsers = onlineUsers;
        },
        setUsers(state, users) {
            state.users = users;
        }
    },

    actions: {
        async requestAllUsers(context) {
            const response = await apiHelper.apiRequest('/user/users');
            context.commit('setUsers', response.data);
        }
    }
}
