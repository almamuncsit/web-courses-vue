<template>

    <div class="row">

      <div class="col-md-3 text-center" v-for="(course, index) in courses" v-bind:key="index">
         <div class="card mb-4 course-card">
           
            <img class="card-img-top" :src="asset_url + course.thumbnail" alt="Card image cap">
            <div class="card-body">
               <h5 class="card-title">{{ course.title }}</h5>
               <p class="card-text"> {{ course.meta_description }} </p>
               <router-link class="btn btn-success start-button btn-sm" :to="{ name: 'singleCourse', params:{id:course.id} }">Start Course</router-link>
            </div>
         </div>
      </div>
      
   </div>

</template>

<script>

import { mapState } from 'vuex'

export default {

  data() {
    return {
      courses: ''
    };
  },
  computed: {
    ...mapState([
      'asset_url'     
    ])
  },
  created() {
    this.$http.get('course/api/all-courses').then(response => {
      this.courses = response.body;
    }, response => {

    })
  }

};
</script>


