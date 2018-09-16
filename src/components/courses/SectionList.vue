<template>
<div class="row">
  <div class="sidebar">

    <div class="course-section" v-for="section in sections">
        <div role="tab" id="heading11">
            <h3>
                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse11" aria-expanded="true" aria-controls="collapseOne">
                   {{ section.title }}
                </a>
            </h3>
        </div>
        <div id="collapse11" class="panel-collapse in" role="tabpanel" aria-labelledby="heading11">
            <ul>
                <li v-for="lesson in section.lessons">
                  <router-link :to="{ name: 'singleLession', params:{id:lesson.id} }">
                    <span class="lesson">1</span> <i class="fa fa-youtube-play"></i> {{ lesson.title }}
                  </router-link>
                </li>
            </ul>
        </div>
    </div>
    
  </div>
</div>
</template>

<script>

export default {
  props:['sections']
};

</script>


