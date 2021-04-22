import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store';

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
    component: () => import(/* webpackChunkName: "sign-in" */ '../views/Signin.vue'),
    meta: { title: 'sign in' }
  },
  {
    path: '/sign-up',
    name: 'Sign-up',
    component: () => import(/* webpackChunkName: "sign-up" */ '../views/Signup.vue'),
    meta: { title: 'sign up' }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { title: 'home', auth: true }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { title: 'about' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const DEFAUT_TITLE = 'mstalk'
  document.title = DEFAUT_TITLE
  if (to.meta.title) {
    document.title = `${DEFAUT_TITLE} | ${to.meta.title}`
  }

  if(to.meta.auth) {
    if(store.getters.getUserState['username']) {
      next();
      return;
    }
    router.push({name: 'Sign-in'});
    return;
  }
  next();

});

export default router
