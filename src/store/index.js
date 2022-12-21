import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: null,
      email: '',
      username: ''
    }
  },
  getters: {
  },
  mutations: {
    CURRENT_USER_FETCHED(state, user) {
      state.user.id = user.id
      state.user.email = user.email
      state.user.username = user.username
    }
  },
  actions: {
    async initialLoad(context) {
      if (localStorage.bgtrackerjwt) { //checking for token
        Vue.axios.defaults.headers.common.Authorization = `Bearer ${localStorage.bgtrackerjwt}` //setting authorization header for all requests
        const res = await Vue.axios.get('/api/auth/currentUser') //making the request to get current user details
        context.commit('CURRENT_USER_FETCHED', res.data.user) //save these details to our vuex
      }
    }
  },
  modules: {
  }
})
