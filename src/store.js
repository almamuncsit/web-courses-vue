import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    asset_url: 'http://localhost/me/webCourse/public',
    isLogin: false
  },

  mutations: {
    setLogin(state, isLogin) {
      state.isLogin = isLogin;
    },
  },

  actions: {

  }

})
