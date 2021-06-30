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
            if (!response.error) {
                let d = {
                    username: response.data.user.username,
                    token: response.data.token,
                    profile_img: response.data.user.profile_img,
                    id: response.data.user._id
                  };
          
                  context.commit('setUserState', d);
                  
            }
            response = {
                  error: response.error,
                  message: response.message
            };
            return response;
        }

    }
}
