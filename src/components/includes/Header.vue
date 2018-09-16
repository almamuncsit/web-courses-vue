<template>
<div> 
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="javascript:void(0)">WebCourses</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'home'}">Home</router-link>
                    </li>
                </ul>
                <!-- <form class="form-inline mr-auto">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> -->

                <ul class="navbar-nav mr-right">

                    
                    <router-link tag="li" class="nav-link" :to="{ name: 'login'}" v-if="!isAuth">
                        <a class="nav-link"> Login </a>
                    </router-link>
                    
                    <router-link class="nav-link" :to="{ name: 'register'}" v-if="!isAuth">
                        <a class="nav-link">Register </a>
                    </router-link>
                    
                    <router-link class="nav-link" :to="{ name: 'register'}">
                        <a class="nav-link">Logout </a>
                    </router-link>

                    <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li> -->

                </ul>

            </div>
        </div>
    </nav>

    <header>

    </header>

</div>    
</template>

<script>
export default {

  data() {
    return {
        isAuth: null
    };
  },

  created() {
    this.isAuth = this.$auth.isAutheticated();
  }

};
</script>

<style >
.router-link-exact-active {
  /*font-weight: 600;*/
  color: #00a65a !important;
  /*border-bottom: 2px solid #00a65a;*/
}
.nav-link {
  display: block;
  padding: 0px;
}
</style>


