<template>
    <div id="LoginForm">
        <div class="container">

            <div class="login-form">
                <div class="main-div text-left">
                    <div class="panel text-center">
                        <h2>Registration Form</h2>
                        <p>Create your account</p>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="name" v-model="fullname" placeholder="Name">
                        <small v-if="errors.name" class="text-danger"> {{ errors.name[0] }} </small>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" id="inputEmail" v-model="email" placeholder="Email Address">
                        <small v-if="errors.email" class="text-danger"> {{ errors.email[0] }} </small>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" v-model="password" id="inputPassword" placeholder="Password">
                        <small v-if="errors.password" class="text-danger"> {{ errors.password[0] }} </small>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" v-model="password_confirmation" id="password_confirmation" placeholder="Confirm Password">
                    </div>
                    <button type="submit" @click="register" class="btn btn-primary">Register</button>
                </div>
            </div>

        </div>
    </div>
</template>


<script>
export default {

  data() {
    return {
        fullname: '',
        email: '',
        password: '',
        password_confirmation: '',

        errors: {}
    }
  },
    methods: {
        register: function () {
            var data = {
                name: this.fullname,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
            }

            this.$http.post("course/api/register", data)
            .then(response => {
                this.$router.push('/login');
            }, response => {
              // console.log(response.body);
              this.errors = response.body.errors;
            })
        }
    }

};
</script>


<style>
div#LoginForm {
  /* background-image: url("https://hdwallsource.com/img/2014/9/blur-26347-27038-hd-wallpapers.jpg"); */
  background: #d3d3d3;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 10px;
}

.form-heading {
  color: #fff;
  font-size: 23px;
}
.panel h2 {
  color: #444444;
  font-size: 18px;
  margin: 0 0 8px 0;
}
.panel p {
  color: #777777;
  font-size: 14px;
  margin-bottom: 30px;
  line-height: 24px;
}
.login-form .form-control {
  background: #f7f7f7 none repeat scroll 0 0;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  font-size: 14px;
  height: 50px;
  line-height: 50px;
}
.main-div {
  background: #ffffff none repeat scroll 0 0;
  border-radius: 2px;
  margin: 10px auto 30px;
  max-width: 38%;
  padding: 50px 70px 70px 71px;
}

.login-form .form-group {
  margin-bottom: 10px;
}
.login-form {
  text-align: center;
}
.forgot a {
  color: #777777;
  font-size: 14px;
  text-decoration: underline;
}
.login-form .btn.btn-primary {
  background: #f0ad4e none repeat scroll 0 0;
  border-color: #f0ad4e;
  color: #ffffff;
  font-size: 14px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding: 0;
}
.forgot {
  text-align: left;
  margin-bottom: 30px;
}
.botto-text {
  color: #ffffff;
  font-size: 14px;
  margin: auto;
}
.login-form .btn.btn-primary.reset {
  background: #ff9900 none repeat scroll 0 0;
}
.back {
  text-align: left;
  margin-top: 10px;
}
.back a {
  color: #444444;
  font-size: 13px;
  text-decoration: none;
}
</style>
