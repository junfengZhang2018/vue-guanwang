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
      },
      {
        path: 'detail/:id',
        name: 'freightDetail',
        component: () => import('../views/freight/detail.vue'),
        meta: { title: '运价详情' }
      },
    ]
  },
  {
    // 会员中心
    path: '/my',
    component: () => import('../views/my'),
    meta: { title: '会员中心' },
    children: [
      {
        path: '',
        name: 'memberCenter',
        component: () => import('../views/my/memberCenter.vue'),
      },
      {
        path: 'email',
        name: 'email',
        component: () => import('../views/my/email.vue'),
        meta: { title: '电子邮箱'},
      },
      {
        path: '',
        name: 'finance',
        component: () => import('../views/my/financeList/index.vue'),
        children: [
          {
            path: 'wallet',
            component: () => import('../views/my/financeList/wallet/index.vue'),
            meta: { title: '我的钱包'},
            children: [
              {
                path: '',
                name: 'wallet',
                component: () => import('../views/my/financeList/wallet/wallet.vue')
              },
              {
                path: 'deposit',
                name: 'deposit',
                component: () => import('../views/my/financeList/wallet/deposit.vue'),
                meta: { title: '余额充值' },
              }
            ]
          },
          {
            path: 'coupon',
            name: 'coupon',
            component: () => import('../views/my/financeList/coupon.vue'),
            meta: { title: '我的优惠券'},
          },
          {
            path: 'integral',
            name: 'integral',
            component: () => import('../views/my/financeList/integral.vue'),
            meta: { title: '我的积分'},
          },
        ]
      },
      {
        path: 'myWaybill',
        name: 'myWaybill',
        component: () => import('../views/my/myWaybill.vue'),
        meta: { title: '我的钱包'},
      },
      {
        path: 'notification',
        name: 'notification',
        component: () => import('../views/my/notification/index.vue'),
        meta: { title: '消息通知'},
        children: [
          {
            path: '',
            name: 'notification',
            component: () => import('../views/my/notification/notification.vue'),
          },
          {
            path: 'setting',
            name: 'setting',
            component: () => import('../views/my/notification/setting.vue'),
            meta: { title: '通知设置'},
          },
        ]
      },
      {
        path: 'address',
        name: 'address',
        component: () => import('../views/my/address/index.vue'),
        meta: { title: '收件地址'},
        children: [
          {
            path: '',
            name: 'address',
            component: () => import('../views/my/address/address.vue'),
          },
          {
            path: 'creatAddress',
            name: 'creatAddress',
            component: () => import('../views/my/address/creatAddress.vue'),
            meta: { title: '创建地址'},
          },
        ]
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import('../views/my/profile/index.vue'),
        meta: { title: '我的账号' },
        children: [
          {
            path: '',
            name: 'profile',
            component: () => import('../views/my/profile/profile.vue'),
          },
          {
            path: 'edit',
            name: 'edit',
            component: () => import('../views/my/profile/edit.vue'),
            meta: { title: '修改资料'},
          },
        ]
      },
      {
        path: 'warehouseAddress',
        name: 'warehouseAddress',
        component: () => import('../views/my/warehouseAddress.vue'),
        meta: { title: '仓库地址' },
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
    // 增值服务
    path: '/addedServices',
    name: 'addedServices',
    component: () => import('../views/addedServices.vue'),
    meta: { title: '代运增值服务' }
  },
  {
    // 赔偿说明
    path: '/compensateExplain',
    name: 'compensateExplain',
    component: () => import('../views/compensateExplain.vue'),
    meta: { title: '货运赔偿说明' }
  },
  {
    // 全抛、免抛、半抛
    path: '/halfFullNoThrow',
    name: 'halfFullNoThrow',
    component: () => import('../views/halfFullNoThrow.vue'),
    meta: { title: '全抛、免抛、半抛' }
  },
  {
    // 货运建议
    path: '/cargoTransportAdvice',
    name: 'cargoTransportAdvice',
    component: () => import('../views/cargoTransportAdvice.vue'),
    meta: { title: '货运建议' }
  },
  {
    // 敏感货物
    path: '/sensitiveGoods',
    name: 'sensitiveGoods',
    component: () => import('../views/sensitiveGoods.vue'),
    meta: { title: '敏感货物' }
  },
  {
    // 敏感货物
    path: '/prohibitedGoods',
    name: 'prohibitedGoods',
    component: () => import('../views/prohibitedGoods.vue'),
    meta: { title: '禁运货物' }
  },
  {
    // 敏感货物
    path: '/distinguishGoods',
    name: 'distinguishGoods',
    component: () => import('../views/distinguishGoods.vue'),
    meta: { title: '敏感货与普货分辨' }
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
