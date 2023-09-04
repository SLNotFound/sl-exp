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

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    { path: '/detail/:id', component: Detail },
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

export default router
