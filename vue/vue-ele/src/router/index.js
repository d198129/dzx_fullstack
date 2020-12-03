import Vue from 'vue'
import VueRouter from 'vue-router'
import Good from '@/views/goods'
import Comment from '@/views/comment/comment'
import Seller from '@/views/seller/seller'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'goods',
    component:Good
  },
  {
    path: '/comment',
    name: 'comment',
    component:Comment
  },
  {
    path: '/seller',
    name: 'seller',
    component:Seller
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
