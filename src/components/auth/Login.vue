<template>
    <div id="LoginForm">
        <div class="container">

            <div class="login-form">
                <div class="main-div">
                    <div class="panel">
                <h2>Admin Login</h2>
                <p>Please enter your email and password</p>
                </div>
                    
                    <div class="form-group">
                        <input type="email" class="form-control" id="inputEmail" v-model="email" placeholder="Email Address">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" v-model="password" id="inputPassword" placeholder="Password">
                    </div>
                    <!-- <div class="forgot">
                        <a href="reset.html">Forgot password?</a>
                    </div> -->
                    <button type="submit" @click="login" class="btn btn-primary">Login</button>
                    
                </div>
            </div>
        </div>
</div>
</template>


<script>

import { mapState, mapMutations } from 'vuex'

export default {
    
    data() {
        return {
            email: '',
            password: ''
        }
    },

    computed: {
        ...mapState([
            'isLogin'
        ])
    },

    methods: {
        ...mapMutations([
            'setLogin'
        ]),

        login: function () {
            var data = {
                client_id: 2,
                client_secret: "h8m3Tx3szJKHp0S3buKxEx25CskrQQ0Vc6ki643p",
                grant_type: "password",
                username: this.email,
                password: this.password
            }
            this.$http.post("oauth/token", data)
            .then(response => {
                this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now());
                this.setLogin(true);
                this.$router.push('/');
            })
        }
    }
  
};
</script>


<style>
</style>
