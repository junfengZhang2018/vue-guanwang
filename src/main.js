import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入iconfont字体库
import '@/assets/font/iconfont.css'
// 初始化样式
import '@/assets/style/init.less'
import 'element-ui/lib/theme-chalk/display.css';
// 按需引入element-ui
import { Carousel, CarouselItem, Pagination } from "element-ui";

// 首页element-ui轮播图
Vue.use(Carousel);
Vue.use(CarouselItem);
// 行业资讯element-ui分页器
// Vue.use(Pagination);
// 引入vue-meta-info用于动态设置网页meta
import MetaInfo from 'vue-meta-info'
Vue.use(MetaInfo)
// 引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
// 引入VueLazyload
// import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload)
//把axios作为Vue的原型属性
Vue.prototype.$axios = axios;
// axios默认配置
axios.defaults.baseURL = 'http://127.0.0.1:3000'; //设置axios默认baseURL
axios.defaults.timeout = 5000;//设置请求超时时间

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  mounted() {
    // seo优化预渲染
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
