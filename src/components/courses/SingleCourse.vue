<template>
<section class="content">
    <div class="container">

      <div class="row">
          <div class="col-md-8 offset-md-2">
            <div class="row">
              <h1 class="sec-title"> {{ course.title}}</h1>
              <p class="course-description">
                  <img class="img-responsive pull-left" :src="asset_url + course.image" :alt="course.title">
                  <span v-html="course.description"></span>
              </p>
            </div>

            <section-list :sections="course.sections"></section-list>

          </div>
      </div>
  
    </div>
</section>
</template>

<script>

import SectionList from './SectionList.vue'
import {mapState} from 'vuex'

export default {

  components: {
    'section-list': SectionList
  },

  computed: {
    ...mapState([
      'asset_url'
    ])
  },

  data() {
    return {
      id: this.$route.params.id,
      course: {},
      url: 'http://localhost/me/webCourse/public'
    }
  },

  created() {
    this.$http.get('course/api/course/' + this.id).then(response => {
      this.course = response.body;
    }, response => {

    })
  }

};
</script>

<style>
  .course-section ul li a {
    font-size: 14px !important;
  }
</style>


