import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    children: [
      {
        path: '',
        name: 'DashBoard',
        component: () => import(/* webpackChunkName: "DashBoard" */ '../components/DashBoard.vue'),
      },
      {
        path: 'content/:category',
        name: 'Content',
        component: () => import(/* webpackChunkName: "Content" */ '../components/Content.vue'),
      },
      {
        path: 'user',
        name: 'User',
        component: () => import(/* webpackChunkName: "User" */ '../components/User.vue'),
      },
      {
        path: 'manage',
        name: 'Manage',
        component: () => import(/* webpackChunkName: "Manage" */ '../components/Manage.vue'),
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
