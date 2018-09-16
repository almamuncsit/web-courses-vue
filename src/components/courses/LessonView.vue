<template>
	
	<div class="col-md-8 main-content col-md-push-4">

                <h1> {{ lesson.title}} </h1>

                <!-- 16:9 aspect ratio -->
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" :src="lesson.youtube" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
                </div>

                <div class="previous-next">
                        <span @click="changeLesson(lesson.id - 1)"> 
                            <router-link :to="{ name: 'singleLession', params:{id:lesson.id-1} }" class="btn btn-success br0">
                                 <i class="fa fa-arrow-left"></i> Previous
                             </router-link>
                        </span>


                        <span @click="changeLesson(lesson.id + 1)"> 
                            <router-link :to="{ name: 'singleLession', params:{id:lesson.id+1} }" class="btn btn-success pull-right br0">
                                 Next <i class="fa fa-arrow-right"></i>
                             </router-link>
                        </span>

                        <!-- <a href="http://www.artofcse.com/lessons/32/text-styling" class="btn btn-success pull-right br0">  Next <i class="fa fa-arrow-right"></i> </a> -->
                </div>

                <div class="share_post text-right">
                    <ul>
                        <li>Share : </li>
                        <li><a target="_blank" href="http://www.facebook.com/sharer.php?u=http://www.artofcse.com/lessons/28/css-bangla-tutorial" class="facebook"> <i class="fa fa-facebook"></i> </a></li>
                        <li><a target="_blank" href="https://twitter.com/share?url=http://www.artofcse.com/lessons/28/css-bangla-tutorial" class="twitter"> <i class="fa fa-twitter"></i> </a></li>
                        <li><a target="_blank" href="https://plus.google.com/share?url=http://www.artofcse.com/lessons/28/css-bangla-tutorial" class="googleplus"> <i class="fa fa-google-plus"></i> </a></li>
                        <li><a target="_blank" href="https://pinterest.com/pin/create/bookmarklet/?media=http://www.artofcse.com/uploads/courses/Basic-CSS72343.jpg&amp;url=http://www.artofcse.com/lessons/28/css-bangla-tutorial&amp;is_video=&amp;description=CSS Bangla Tutorial" class="pinterest"> <i class="fa fa-pinterest"></i> </a></li>
                        <li><a target="_blank" href="http://www.linkedin.com/shareArticle?url=http://www.artofcse.com/lessons/28/css-bangla-tutorial&amp;title=CSS Bangla Tutorial" class="linkedin"> <i class="fa fa-linkedin"></i> </a></li>
                    </ul>
                </div>


                <div class="description">
                    <span v-html="lesson.description"></span>
                </div>

            </div>

</template>


<script>
	
export default {
	props: ['lesson'],
	data() {
		return {
			
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
  }
};

</script>