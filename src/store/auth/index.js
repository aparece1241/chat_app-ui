import ApiHelper from '../../helper/apiHelper'

export default {
    namespaced: true,
    state: {
        user: {}
    },
    getters: {
        getAuthUser(state) {
            return state.user
        }
    },
    mutations: {
        setUserState(state, user) {
            state.user = user;
        }
    },
    actions: {
        async login(context, data) {
            let response = await ApiHelper.apiRequest("/user/login", "POST", data);
            return response;
        }

    }
}
