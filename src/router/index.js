import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Detail from '@/views/Detail'
import Register from '@/views/Register'
import Layout from '@/views/Layout'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    { path: '/detail/:id', component: Detail },
    { path: '/register', component: Register },
    { path: '/layout', component: Layout }
  ]
})

export default router
