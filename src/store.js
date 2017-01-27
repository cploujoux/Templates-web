import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {
      name: "",
      email: "",
      isLoged: false,
      token: ""
    }
  },
  mutations: {
    login (state, status) {
      state.user.isLoged = status
    },
    user (state, user) {
      state.user = user
    } 
  }
})

export default store