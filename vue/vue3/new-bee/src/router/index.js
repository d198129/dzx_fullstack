import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      index: 1
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('@/views/ProductDetail')
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: () => import('@/views/Cart')
  },
  {
    path: '/create-order',
    name: 'create-order',
    component: () => import('@/views/CreateOrder')
  },
  {
    path: '/address',
    name: 'address',
    component: () => import('@/views/Address')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router