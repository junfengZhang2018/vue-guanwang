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
            meta: { title: '我的钱包' },
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
            path: 'creatAddress/:item',
            name: 'creatAddress',
            component: () => import('../views/my/address/creatAddress.vue'),
            meta: { title: '创建地址'},
          },
        ]
      },
      {
        path: 'package',
        name: 'package',
        component: () => import('../views/my/package/index.vue'),
        meta: { title: '我的包裹'},
        children: [
          {
            path: '',
            name: 'package',
            component: () => import('../views/my/package/package.vue'),
          },
          {
            path: 'addPackage',
            name: 'addPackage',
            component: () => import('../views/my/package/addPackage.vue'),
            meta: { title: '添加包裹'},
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
    path: '/help',
    component: () => import('../views/help'),
    meta: { title: '帮助中心' },
    children: [
      {
        path: '',
        name: 'helpCenter',
        component: () => import('../views/help/helpCenter.vue'),
      },
      {
        path: 'howToChangeAddress',
        name: 'howToChangeAddress',
        component: () => import('../views/help/howToChangeAddress.vue'),
        meta: { title: '如何修改收获地址' },
      },
      {
        path: 'helpPage',
        name: 'helpPage',
        component: () => import('../views/help/helpPage.vue'),
        meta: { title: '首次使用代运须知' },
      },
      {
        path: 'helpPage1',
        name: 'helpPage1',
        component: () => import('../views/help/helpPage1.vue'),
        meta: { title: '包裹已经送达仓库，但未见代运订单' },
      },
      {
        path: 'helpPage2',
        name: 'helpPage2',
        component: () => import('../views/help/helpPage2.vue'),
        meta: { title: '包裹在仓库可以存放多久' },
      },
      {
        path: 'helpPage3',
        name: 'helpPage3',
        component: () => import('../views/help/helpPage3.vue'),
        meta: { title: '如何查看商家发货快递单号' },
      },
      {
        path: 'helpPage4',
        name: 'helpPage4',
        component: () => import('../views/help/helpPage4.vue'),
        meta: { title: '商品如何退货或换货' },
      },
      {
        path: 'helpPage5',
        name: 'helpPage5',
        component: () => import('../views/help/helpPage5.vue'),
        meta: { title: '代运包裹签收及验货规则' },
      },
      {
        path: 'helpPage6',
        name: 'helpPage6',
        component: () => import('../views/help/helpPage6.vue'),
        meta: { title: '商家发货后多久可送达仓库' },
      },
      {
        path: 'packageName',
        name: 'packageName',
        component: () => import('../views/help/packageName.vue'),
        meta: { title: '如何填写包裹名称' },
      },
      {
        path: 'howAddPackage',
        name: 'howAddPackage',
        component: () => import('../views/help/howAddPackage.vue'),
        meta: { title: '如何添加包裹' },
      },
      {
        path: 'deposit',
        name: 'deposit',
        component: () => import('../views/help/deposit.vue'),
        meta: { title: '如何充值进我的钱包' },
      },
      
    ]
  },
  {
    // 如何代运
    path: '/howToForwarding',
    name: 'howToForwarding',
    component: () => import('../views/howToForwarding.vue'),
    meta: { title: '如何代运' }
  },
  {
    // 如何代运
    path: '/aboutUs',
    name: 'aboutUs',
    component: () => import('../views/aboutUs.vue'),
    meta: { title: '关于我们' }
  },
  {
    // 如何代运
    path: '/faq',
    name: 'faq',
    component: () => import('../views/faq.vue'),
    meta: { title: '常见问题' }
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
