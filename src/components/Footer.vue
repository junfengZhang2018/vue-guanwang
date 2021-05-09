<template>
  <div class="wrapper">
    <div id="footer" class="hidden-xs-only">
      <div class="contactWay container">
        <ul>
          <li>
            <i class="iconfont icon-dianhua"></i>
            <a :href="'tel:'+contactWay.tel" v-text="contactWay.tel"></a>
          </li>
          <li>
            <i class="iconfont icon-youxiang-"></i>
            <a :href="'mailto:'+contactWay.email" v-text="contactWay.email"></a>
          </li>
          <li>
            <i class="iconfont icon-qq"></i>
            <a
              :href="'tencent://message/?uin=' + contactWay.qq + '&Site=&Menu=yes'"
              v-text="contactWay.qq"
            ></a>
          </li>
        </ul>
        <div class="weChat">
          <img v-lazy="contactWay.weChat" alt="青玖科技官方微信服务号" />
          <h3>官方微信服务号</h3>
        </div>
        <div class="partner">
          <img src="@/assets/images/partner.png" alt="">
        </div>
      </div>
      <!-- 版权信息 -->
      <div class="copyright container">
        <div class="footer-info">
          <div class="footer-copyright">© 2021 MuluPost.</div>
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
        <router-link class="tabbar-item" v-for="(item, index) in barList" :key="index" to="">
          <div class="icon"></div>
          <div>{{item.title}}</div>
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
          title: '网站首页',
          url: ''
      },{
          title: '网站首页',
          url: ''
      },{
          title: '网站首页',
          url: ''
      },{
          title: '网站首页',
          url: ''
      },]
    };
  },
  created(){
    // 将父组件props传递过来的值赋给data中contactWay
    this.contactWay = this.contacts;
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  // footer公共样式
  #footer {
    width: 100%;
    overflow: hidden;
    .contactWay {
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      .weChat {
        margin-top: 25px;
        margin-bottom: 15px;
        width: 150px;
        height: 160px;
        text-align: center;
        float: left;
        h3 {
          line-height: 30px;
          margin-top: 5px;
          font-size: 1em;
          color: #eeeeee;
        }
        img {
          width: auto;
          height: 120px;
          border-radius: 12px;
        }
      }
      ul {
        display: block;
        width: 280px;
        height: 120px;
        margin: 40px 0;
        float: right;
        overflow: hidden;
        li {
          height: 40px;
          line-height: 40px;
          overflow: hidden;
          i {
            font-size: 1.5em;
            color: #eeeeee;
            margin-right: 15px;
          }
          a {
            font-size: 1em;
            color: #eeeeee;
            &:hover {
              color: #0092ff;
            }
          }
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
    height: 56px;
    .tabbar{
      display: flex;
      position: fixed;
      z-index: 10000;
      bottom: 0;
      width: 100%;
      background-color: #fff;
      .tabbar-item{
        display: block;
        flex: 1;
        padding: 4px 0 2px;
        height: 50px;
        color: #666666;
        text-align: center;
        .icon{
          margin: 0 auto;
          margin-bottom: 6px;
          width: 24px;
          height: 24px;
          border: 1px solid #000;
        }
      }
    }
  }
}
</style>