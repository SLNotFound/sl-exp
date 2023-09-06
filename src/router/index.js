import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '@/utils/storage'

const Login = () => import('@/views/Login')
const Detail = () => import('@/views/Detail')
const Register = () => import('@/views/Register')
const Layout = () => import('@/views/Layout')

const Article = () => import('@/views/Article')
const Collect = () => import('@/views/Collect')
const Like = () => import('@/views/Like')
const My = () => import('@/views/User')

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
