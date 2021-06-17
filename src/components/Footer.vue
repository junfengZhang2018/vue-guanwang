<template>
  <div class="wrapper">
    <div id="footer" class="hidden-xs-only">
      <div class="contactWay container">
        <div class="info">
          <div class="info-wrap">
            <div class="title tl">联系方式</div>
            <p>电话：+86 131111111111</p>
            <p>邮箱：123456@qq.com</p>
          </div>
          <div class="info-wrap">
            <div class="title tl">工作时间</div>
            <p>09:00 AM ~ 18:00 PM (周一 至 周五)</p>
            <p>10:00 AM ~ 18:00 PM (周六 与 周日)</p>
          </div>
        </div>
        <div class="weChat">
          <div class="title">微信服务号</div>
          <img src="@/assets/images/logo.png" alt="智腾达微信服务号" />
        </div>
        <div class="partner">
          <div class="title tr">合作伙伴</div>
          <img src="@/assets/images/partner.png" alt="">
        </div>
      </div>
      <!-- 版权信息 -->
      <div class="copyright container">
        <div class="footer-info">
          <div class="footer-copyright">© 2021 BosuPost.</div>
          <div class="footer-links">
            <ul>
              <li v-for="(item, i) in navList" :key="i">{{item.title}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id="m-footer" class="hidden-sm-and-up">
      <div class="tabbar">
        <router-link exact class="tabbar-item" v-for="(item, index) in barList" :key="index" :to="item.url">
          <div class="icon md" :class="item.iconClass"></div>
          <div class="title">{{item.title}}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["contacts"],
  data() {
    return {
      navList: [{
          title: '网站首页',
          url: ''
      }, {
          title: '服务条款',
          url: ''
      }, {
          title: '隐私政策',
          url: ''
      }, {
          title: '关于我们',
          url: ''
      }, {
          title: '加入我们',
          url: ''
      }],
      barList: [{
          title: 'BosuPost',
          url: '/',
          iconClass: 'icon-tabbar-home'
      }, {
          title: '运费价格',
          url: '/freightPrice',
          iconClass: 'icon-tabbar-pricing'
      }, {
          title: '帮助中心',
          url: '/help',
          iconClass: 'icon-tabbar-how'
      }, {
          title: '会员中心',
          url: '/my',
          iconClass: 'icon-tabbar-my'
      }]
    };
  },
  created(){
    
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  background-color: #fff;
  // footer公共样式
  #footer {
    width: 100%;
    overflow: hidden;
    margin-top: 32px;
    background-color: #fff;
    border-top: 1px solid #eeeeee;
    .contactWay {
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      padding: 36px 0;
      >div{
        flex: 1;
      }
      .title{
        font-size: 16px;
        margin: 0 0 8px;
        color: #586C94;
        font-weight: bold;
      }
      .info-wrap{
        margin-bottom: 12px;
        line-height: 24px;
        p{
          font-size: 14px;
        }
      }
      .weChat {
        text-align: center;
        img {
          width: 128px;
          height: 128px;
        }
      }
      .partner{
        img{
          width: 320px;
          height: 132px;
        }
      }
    }
    .copyright {
      border-top: 1px solid #eee;
      color: #999;
      font-size: 14px;
      .footer-info{
        padding: 24px 0;
        display: flex;
        justify-content: space-between;
      }
      .footer-links{
        ul{
          display: flex;
        }
        li{
          margin-left: 15px;
          cursor: pointer;
          &:hover{
            text-decoration: underline;
            color: #000;
          }
        }
      }
    }
  }
  #m-footer{
    .tabbar{
      display: flex;
      position: fixed;
      z-index: 1000;
      bottom: 0;
      width: 100%;
      background-color: #fff;
      padding-bottom: env(safe-area-inset-bottom);
      font-size: 11px;
      .tabbar-item{
        display: block;
        flex: 1;
        padding: 4px 0 2px;
        height: 50px;
        color: #333;
        text-align: center;
        .icon{
          margin: 0 auto;
          margin-bottom: 2px;
        }
        &.router-link-active{
          color: #007fff;
        }
      }
    }
  }
}
</style>