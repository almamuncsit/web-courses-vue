export default function (Vue) {
	Vue.auth = {
		// Set token
		setToken(token, expiration) {
			localStorage.setItem('token', token)
			localStorage.setItem('expiration', expiration)
		},

		// Get token
		getToken() {
			var token = localStorage.getItem('token')
			var expiration = localStorage.getItem('expiration')

			if (!token || !expiration )
				return null

			if (Date.now() > parseInt(expiration)) {
				this.destroyToken()
				return null
			} else
				return token
		},

		// destroy token
		destroyToken() {
			localStorage.removeItem('token')
			localStorage.removeItem('expiration')
		},

		// is autheticated
		isAutheticated() {
			if (this.getToken()) {
				return true;
			} else {
				return false;
			}
		}
	}

	Object.defineProperties(Vue.prototype, {
		$auth: {
			get: () => {
				return Vue.auth;
			}
		}
	})
}