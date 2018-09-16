import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'

import Auth from '../packages/auth/Auth'
Vue.use(Auth);
Vue.use(VueResource);


// Checking login on router
router.beforeEach(
	(to, from, next) => {
		if (to.matched.some(record => record.meta.forVisitors)) {
			if (Vue.auth.isAutheticated()) {
				next({
					name: 'home'
				})
			} else next()
		} else if (to.matched.some(record => record.meta.forAuth)) {
			if ( !Vue.auth.isAutheticated() ) {
				next({
					name: 'login'
				})
			} else next()
		} else next()
	}
);


Vue.http.options.root = 'http://localhost/me/webCourse/public'
Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
