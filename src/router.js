import Vue from 'vue'
import Router from 'vue-router'

// Import components
import Home from './components/Home.vue'
import Login from './components/auth/Login.vue'
import Registration from './components/auth/Registration.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        forVisitors: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Registration,
      meta: {
        forVisitors: true
      }
    },
    {
      path: '/courses',
      name: 'coureses',
      component: () => import('./components/courses/CourseList.vue'),
    },
    {
      path: '/course/:id',
      name: 'singleCourse',
      component: () => import('./components/courses/SingleCourse.vue'),
      meta: {
        forAuth: true
      }
    },
    {
      path: '/lessons/:id',
      name: 'singleLession',
      component: () => import('./components/courses/ShowLesson.vue'),
      meta: {
        forAuth: true
      }
    }
  ]
})

