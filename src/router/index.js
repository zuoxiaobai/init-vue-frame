import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import '../i18n/index'

Vue.use(VueRouter)

// let a = {
//   a: '1',
// }

// console.log(a)
// let b = { c: 1 }
// a = b++
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
