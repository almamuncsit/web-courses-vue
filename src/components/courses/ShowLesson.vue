<template>
<section class="content">
    <div class="container">
      <div class="row">
          <div class="col-md-4">

              <div class="row">
                  <div class="sidebar">
                      <div class="course-section" v-for="section in course.sections">
                          <div role="tab" id="heading11">
                              <h3>
                                  <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse11" aria-expanded="true" aria-controls="collapseOne">
                                     {{ section.title }}
                                  </a>
                              </h3>
                          </div>
                          <div id="collapse11" class="panel-collapse in" role="tabpanel" aria-labelledby="heading11">
                              <ul>
                                  <li v-for="lesson in section.lessons" @click="changeLesson(lesson.id)">
                                    <router-link :to="{ name: 'singleLession', params:{id:lesson.id} }" >
                                      <span class="lesson">1</span> <i class="fa fa-youtube-play"></i> {{ lesson.title }}
                                    </router-link>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>

          </div>



          <lesson-view :lesson="lesson"></lesson-view>
          


      </div>
    </div>
</section>
</template>

<script>

import LessonView from './LessonView.vue'

export default {

  components: {
    'lesson-view': LessonView
  },

  data() {
    return {
      id: this.$route.params.id,
      lesson: {},
      course: {},
      url: 'http://localhost/me/webCourse/public'
    }
  },

  methods: {
    changeLesson: function(lessonId) {
      this.id = lessonId;
      this.$http.get('course/api/lesson/' + this.id).then(response => {
        this.lesson = response.body.lesson;
      }, response => {

      })
    },
  },

  created() {
      this.$http.get('course/api/lesson/' + this.id).then(response => {
        this.lesson = response.body.lesson;
        this.course = response.body.course;
        console.log(this.lesson);
      }, response => {

      })
  }

};
</script>



