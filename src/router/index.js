import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landingpage',
    component: () => import(/* webpackChunkName: "landingpage" */ '../views/Landingpage.vue')
  },
  {
    path: '/sign-in',
    name: 'Sign-in',
    component: () => import(/* webpackChunkName: "sign-in" */ '../views/Signin.vue')
  },
  {
    path: '/sign-up',
    name: 'Sign-up',
    component: () => import(/* webpackChunkName: "sign-up" */ '../views/Signup.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
