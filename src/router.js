import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

// Import components
import Home from './components/Home.vue'
import Login from './components/auth/Login.vue'
import Registration from './components/auth/Registration.vue'
import CourseList from './components/courses/CourseList.vue'
import SingleCourse from './components/courses/SingleCourse.vue'
import ShowLesson from './components/courses/ShowLesson.vue'

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
      component: CourseList
    },
    {
      path: '/course/:id',
      name: 'singleCourse',
      component: SingleCourse,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/lessons/:id',
      name: 'singleLession',
      component: ShowLesson,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

