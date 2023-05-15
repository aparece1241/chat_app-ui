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
        },
        resetState(state) {
            state.user = {};
        }
    },
    actions: {
        async login(context, data) {
            let response = await ApiHelper.apiRequest("/user/login", "POST", data);
            if (!response.error) {
                  context.commit('setUserState', response.data.user);
            }
            response = {
                  error: response.error,
                  message: response.message
            };
            return response;
        }

    }
}
