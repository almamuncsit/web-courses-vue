<template>
<div>

  
  <header class="header" id="header1">
  	<div class="center">
  		<div class="caption">
  			<h2 class="title display-3">Header title</h2>
  			<p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ea accusamus enim hic, itaque eius quibusdam maxime veritatis maiores, ipsum porro beatae. Quisquam deleniti maxime velit tempora, molestias corrupti iusto!</p>
        <router-link class="action btn btn-success" :to="{ name: 'login'}"  v-if="!isLogin">Login</router-link>
        <router-link class="action btn btn-warning" :to="{ name: 'register'}"  v-if="!isLogin">Register</router-link>
  	  </div>	
  	</div>
  	
    <a href="#course-area">
      <i class="scroll fa fa-angle-double-down"></i>
    </a>
  </header>
  
  <div class="container course-area" id="course-area">
     <course-list></course-list>
     <social-media></social-media>
  </div>

</div>
</template>

<script>

import { mapState } from 'vuex'
import CourseList from './courses/CourseList.vue'
import SocialMedia from './includes/SocialMedia.vue'
export default {
  components: {
    'course-list': CourseList,
    'social-media': SocialMedia
  },

  computed: {
    ...mapState([
      'isLogin'
    ])
  },

  data() {
    return {
      
    };
  }

};
</script>


<style>
/* =======================================
 header
========================================*/
.header {
  position: relative;
  width: 100%;
  height: 344px;
}
.header .center {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
  z-index: 5;
  padding: 1rem;
}
.header .left {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
  z-index: 5;
  padding: 1rem;
}
.header .right {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
  z-index: 5;
  padding: 1rem;
}
.header .scroll {
  position: absolute;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 1.5rem;
}
/*=== Large devices (desktops, 992px and up) ===*/
@media (min-width: 992px) {
  .header .center {
    width: 50%;
  }
  .header .left {
    position: absolute;
    top: 20%;
    left: 10%;
    width: 40%;
    height: 60%;
    transform: translate(0, 0);
    padding: 1rem;
  }
  .header .right {
    position: absolute;
    top: 20%;
    left: 50%;
    width: 40%;
    height: 60%;
    transform: translate(0, 0);
    padding: 1rem;
  }
}

/* =======================================
 header#1
========================================*/
#header1 {
  background: rgba(1, 191, 134, 0.95);
  background:
    /* gradient overlay */ linear-gradient(
      to bottom,
      rgba(203, 53, 107, 0.6),
      /* #cb356b */ rgba(189, 63, 50, 0.5) /* #bd3f32 */
    ),
    /* bottom image */
      url("https://cdn.stocksnap.io/img-thumbs/960w/VPYPAS4FVT.jpg") no-repeat
      left top;
  background-size: cover;
  z-index: 0;
}
#header1 .caption {
  text-align: center;
  color: #fff;
}
#header1 .caption .title {
  margin-bottom: 1.5rem;
}
#header1 .caption .text {
  margin-bottom: 1.5rem;
}
#header1 .caption .action {
  margin-bottom: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;
  border-radius: 15px;
}

/**************************
// Home page card 
/************************
*/
.card {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}
.course-card {
  min-height: 367px;
}
.card-title {
  color: #555;
font-size: 18px;
font-weight: 600;
line-height: 1.5;
margin-bottom: 5px;
margin-top: -5px;
font-family: 'Titillium Web', sans-serif;
}
.card-text {
  font-size: 13px;
}
.start-button {
  color: #fff;
background-color: #449d44;
border-color: #449d44;
}

.course-area {
  padding-top: 40px;
}

.social-card-header {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 96px;
}
.social-card-header i {
  font-size: 32px;
  color: #fff;
}
.bg-facebook {
  background-color: #3b5998;
}
.text-facebook {
  color: #3b5998;
}
.bg-google-plus {
  background-color: #dd4b39;
}
.text-google-plus {
  color: #dd4b39;
}
.bg-twitter {
  background-color: #1da1f2;
}
.text-twitter {
  color: #1da1f2;
}
.bg-pinterest {
  background-color: #bd081c;
}
.text-pinterest {
  color: #bd081c;
}
.share:hover {
  text-decoration: none;
  opacity: 0.8;
}
</style>


