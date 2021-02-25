import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/me',
    name: 'me',
    component: () => import('@/views/Me')
  },
  {
    path: '/news',
    name: 'New',
    component: () => import('@/views/New')
  },
  {
    path: '/friend',
    name: 'friend',
    component: () => import('@/views/Friend')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/Login'),
    meta: {
      title: '登录'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
