import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

export const dynamicRoutes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    redirect: 'home/dashboard',
    children: [
      {
        path: 'dashboard',
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
      },
      {
        path: 'setting',
        name: 'Setting',
        component: () => import(/* webpackChunkName: "Setting" */ '../components/Setting.vue'),
      },
      {
        path: 'categorys',
        name: 'Categorys',
        component: () => import(/* webpackChunkName: "Categorys" */ '../components/Categorys.vue'),
      },
      {
        path: 'models',
        name: 'Models',
        component: () => import(/* webpackChunkName: "Models" */ '../components/Models.vue'),
      },
      {
        path: 'auths',
        name: 'Auths',
        component: () => import(/* webpackChunkName: "Auths" */ '../components/Auths.vue'),
      }
    ]
  }
]

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
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
