<template>
  <div id="app" :class="{'bgc':!exclude.includes($route.name)}">
    <Dialog />
    <!-- 顶部导航组件 -->
    <Nav></Nav>
    <div class="container mainbody">
      <Sidebar v-if="!exclude.includes($route.name)" />
      <div class="view">
        <Breadcrumb v-if="!exclude.includes($route.name)" />
        <router-view />
      </div>
    </div>
    <!-- 底部联系方式及版权信息 -->
    <Footer></Footer>
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import Sidebar from '@/components/Sidebar.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Dialog from '@/components/Dialog/dialog'
import util from '@/util'
import { mapMutations } from 'vuex'

export default {
  name: "App",
  components: {
    Nav,
    Footer,
    Sidebar,
    Breadcrumb,
    Dialog
  },
  data() {
    return {
      exclude: ['Home']
    };
  },
  created() {
    let user = util.storage.get('user');
    user && this.SET_USER_INFO(user.user_name);
  },
  methods: {
    ...mapMutations(['SET_USER_INFO'])
  }
};
</script>
<style lang="less">
div,
p,
ul,
li,
ol,
dl,
dt,
dd,
span,
strong,
em,
i,
b,
img,
form,
h1,
h2,
h3,
h4,
h5,
h6,
input,
fieldset,
legend,
optgroup,
select,
table,
textarea,
blockquote {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
  font: 1em/1 Helvetica, Tahoma, "Microsoft YaHei", "微软雅黑",
    \5fae\8f6f\96c5\9ed1, Arial, STXihei, "华文细黑", SimSun, "宋体", Heiti,
    "黑体", sans-serif;
}
.bgc{
  background-color: #fafafa;
}
img {
  border: 0;
  vertical-align: middle;
  max-width: 100%;
  width: auto;
  height: auto;
}
ul,
ol {
  list-style: none;
}
a {
  cursor: pointer;
  text-decoration: none;
  color: #000;
  transition: color 0.5s;
  -moz-transition: color 0.5s;
  -webkit-transition: color 0.5s;
  -o-transition: color 0.5s;
}

.clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
   content: "";
   display: block;
   height: 0;
   clear:both;
   visibility: hidden;
 }
 .clearfix{
   *zoom: 1;/*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
 }
.mainbody{
  display: flex;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;
  .view{
    flex: 1;
    >div{
      position: relative;
    }
  }
}
@media screen and (max-width: 768px) {
  .mainbody{
    min-height: calc(100vh - 60px);
    .view{
        padding-bottom: 56px;
    }
  }
}
</style>
