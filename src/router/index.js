import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    // 首页
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '网站首页' }
  },
  {
    // 运费价格
    path: '/freightPrice',
    component: () => import('../views/freight'),
    meta: { title: '运费价格' },
    children: [
      {
        path: '',
        name: 'freightPrice',
        component: () => import('../views/freight/freightPrice.vue'),
      },
      {
        path: 'calculation',
        name: 'calculation',
        component: () => import('../views/freight/calculation.vue'),
        meta: { title: '计算运费' }
      }
    ]
  },
  {
    // 帮助中心
    path: '/helpCenter',
    name: 'helpCenter',
    component: () => import('../views/helpCenter.vue'),
    meta: { title: '帮助中心' }
  },
  {
    // 如何代运
    path: '/howToForwarding',
    name: 'howToForwarding',
    component: () => import('../views/howToForwarding.vue'),
    meta: { title: '如何代运' }
  },
  {
    // 登录
    path: '/signIn',
    name: 'signIn',
    component: () => import('../views/signIn.vue'),
    meta: { title: '用户登录' }
  },
  {
    // 注册
    path: '/signUp',
    name: 'signUp',
    component: () => import('../views/signUp.vue'),
    meta: { title: '账号注册' }
  },
  {
    // 注册
    path: '/forgetPassword',
    name: 'forgetPassword',
    component: () => import('../views/forgetPassword.vue'),
    meta: { title: '忘记密码' }
  },
  {
    // 路径错误时访问首页
    path: '*',
    redirect: { name: 'Home' }
  }
]

const router = new VueRouter({
  mode: 'history',//对比hash模式路由更美观无#
  base: process.env.BASE_URL,
  routes
})

export default router
