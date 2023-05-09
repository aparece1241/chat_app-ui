import apiHelper from '../../helper/apiHelper'

export default {
    namespaced: true,
    
    state: {
        user: {},
        users: [],
        onlineUsers: [],
    },

    getters: {
        getOnlineUsers(state) {
            return state.onlineUsers;
        },
        getAllUsers(state) {
            return state.users;
        },
        getUser(state) {
            return state.user;
        }
    },

    mutations: {
        setOnlineUsers( state, onlineUsers ) {
            state.onlineUsers = onlineUsers;
        },
        setUsers(state, users) {
            state.users = users;
        },
        setUser(state, user) {
            state.user = user;
        },
        resetState(state) {
            state.user = {};
            state.users = [];
            state.onlineUsers = [];
        }
    },

    actions: {
        async requestAllUsers(context) {
            const response = await apiHelper.apiRequest('/user/users');
            context.commit('setUsers', response.data);
        },
        async requestUser(context, user_id) {
            const response = await apiHelper.apiRequest(`/user/${user_id}`);
            context.commit('setUser', response.data);
        }
    }
}
