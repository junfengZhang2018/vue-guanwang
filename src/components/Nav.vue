<template>
  <div class="wrapper">
    <!-- header开始 -->
    <div id="header" class="hidden-xs-only">
      <!-- 导航栏 -->
      <div id="nav" class="container">
        <!-- 公司logo -->
        <h1>
          <a href="https://www.qjtco.com/">
            <img src="@/assets/images/logo.png" alt="" />
          </a>
        </h1>
        <!-- 导航栏列表 -->
        <ul :class="{'navActive':navShow}" @click="navhidden">
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/brand">运费价格</router-link>
          </li>
          <li>
            <router-link to="/about">帮助中心</router-link>
          </li>
          <li>
            <router-link to="/kit">如何代运</router-link>
          </li>
          <li>
            <router-link to="/news">登录/注册</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div id="m-nav" class="hidden-sm-and-up">
      <div class="m-header-inner">
        <div class="m-header-bar">
          <div class="headleft">
            <a href="" class="btn btn-success">立即注册</a>
          </div>
          <div class="headright">
            <a href="" class="btn btn-primary-fill">账户登录</a>
          </div>
        </div>
      </div>
    </div>
    <!-- header结束 -->
  </div>
</template>

<script>
export default {
  props: ["contacts"],
  data() {
    return {
      contactWay: {
        // 网站顶部邮箱
        email: "qjtcoonline@163.com",
        // 网站顶部电话
        tel: "15241794625"
      },
      navShow: true, //响应式情况下navShow控制navActive类控制导航栏是否显示
      navBtnClass: "iconfont icon-daohang1"
    };
  },
  methods: {
    navbtn() {
      // 通过class的变化控制导航按钮图标
      this.navShow
        ? (this.navBtnClass = "iconfont icon-guanbi")
        : (this.navBtnClass = "iconfont icon-daohang1");
      //通过navShow的取反控制是否绑定navActive类,控制菜单是否显示
      this.navShow = !this.navShow;
    },
    navhidden() {
      // 修复路由跳转后菜单不收起的bug
      this.navShow = !this.navShow;
      this.navBtnClass = "iconfont icon-daohang1";
    }
  },
  created() {
    // 将父组件props传递过来的值赋给data中contactWay
    this.contactWay = this.contacts;
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  #header {
    // 顶部email和phone
    position: relative;
    z-index: 999;
    height: 48px;
    padding: 12px 0;
    border-bottom: 1px solid #eeeeee;
    box-shadow: 0 0 6px #eeeeee;
    // 顶部导航栏及LOGO样式
    #nav {
      display: flex;
      justify-content: space-between;
      height: 48px;
      margin: 0 auto;
      position: relative;
      z-index: 999;
      // LOGO
      h1 {
        float: left;
        img {
          width: 180px;
          height: 48px;
          margin-right: 30px;
        }
      }
      // 导航栏
      > ul {
        > li {
          float: left;
          margin-left: 8px;
          a {
            padding: 6px 8px;
            height: 40px;
            line-height: 40px;
            color: #000000;
          }
          // 根据路有变化改变导航样式
          .router-link-exact-active {
            color: #007fff;
            text-decoration: underline
          }
          .active {
            background: #0092ff;
            border-radius: 50px;
            color: #ffffff;
          }
        }
      }
    }
  }
  #m-nav {
    height: 60px;
      .m-header-inner {
        position: fixed;
        background-color: #ffffff;
        z-index: 99;
        left: 0;
        right: 0;
        top: 0;
        .m-header-bar{
          display: flex;
          align-items: center;
          height: 60px;
          .btn{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            text-align: center;
            line-height: 24px;
            font-size: 16px;
            padding: 4px 8px;
            white-space: nowrap;
          }
          .headleft{
            flex: 1;
            display: flex;
            justify-content: flex-start;
            .btn{
              margin-left: 12px;
            }
            .btn-success {
              background-color: #ffffff;
              color: #059603;
              border: 1px solid #059603;
            }
          }
          .headright{
            flex: 1;
            display: flex;
            justify-content: flex-end;
            .btn{
              margin-right: 12px;
            }
            .btn-primary-fill {
              color: #fff;
              background-color: #198cff;
              border: 1px solid #007fff;
            }
          }
        }
      }
    }
}
</style>