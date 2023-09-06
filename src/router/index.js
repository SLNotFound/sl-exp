import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Detail from '@/views/Detail'
import Register from '@/views/Register'
import Layout from '@/views/Layout'

import Article from '@/views/Article'
import Collect from '@/views/Collect'
import Like from '@/views/Like'
import My from '@/views/User'

import { getToken } from '@/utils/storage'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    { path: '/article/:id', component: Detail },
    { path: '/register', component: Register },
    {
      path: '/',
      component: Layout,
      redirect: '/article',
      children: [
        { path: 'article', component: Article },
        { path: 'collect', component: Collect },
        { path: 'like', component: Like },
        { path: 'my', component: My }
      ]
    }
  ]
})

const whiteList = ['/login', '/register']

router.beforeEach((to, from, next) => {
  const token = getToken()
  if (token) {
    next()
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
