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
    meta: { title: '首页' }
  },
  {
    // 运费价格
    path: '/freightPrice',
    component: () => import('../views/freight.vue'),
    meta: { title: '运费价格' },
    children: [
      {
        path: '',
        name: 'freightPrice',
        component: () => import('../views/freightPrice.vue'),
      },
      {
        path: 'calculation',
        name: 'calculation',
        component: () => import('../views/calculation.vue'),
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
    // 自动入库
    path: '/automaticStorage',
    name: 'automaticStorage',
    component: () => import('../views/automaticStorage.vue'),
    meta: { title: '自动入库' }
  },
  {
    // 自动入库
    path: '/warehouseAddress',
    name: 'warehouseAddress',
    component: () => import('../views/warehouseAddress.vue'),
    meta: { title: '仓库地址' }
  },
  {
    // 自动入库
    path: '/addedServices',
    name: 'addedServices',
    component: () => import('../views/addedServices.vue'),
    meta: { title: '仓库地址' }
  },
  {
    // 注册
    path: '/signUp',
    name: 'signUp',
    component: () => import('../views/signUp.vue'),
    meta: { title: '账号注册' }
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
