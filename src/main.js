import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex'
// 初始化样式
import '@/assets/style/init.less'
import 'element-ui/lib/theme-chalk/display.css';

// 全局弹窗
import Dialog from '@/components/Dialog'
Vue.use(Dialog);
// 缺省组件
import Default from '@/components/default'
Vue.component(Default.name, Default);
// 按需引入element-ui
import { Carousel, CarouselItem, Breadcrumb, BreadcrumbItem, Radio, RadioGroup, Checkbox, Message, Select, Input, Option, Badge } from "element-ui";
// 首页element-ui轮播图
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Checkbox);
Vue.use(Select);
Vue.use(Input);
Vue.use(Option);
Vue.use(Badge);
Vue.prototype.$message = Message;
import VueClipBoard from 'vue-clipboard2'
Vue.use(VueClipBoard);
// 行业资讯element-ui分页器
// Vue.use(Pagination);
// 引入vue-meta-info用于动态设置网页meta
import MetaInfo from 'vue-meta-info'
Vue.use(MetaInfo)
import util from './util'
Vue.prototype.$util = util;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    // seo优化预渲染
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
