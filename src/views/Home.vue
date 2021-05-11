<template>
  <div class="wrapper">
    <!-- bodyer开始 -->
    <div id="homeBodyer">
      <div class="home-intro hidden-xs-only">
        <h1>马来西亚，新加坡，中国淘宝代运专家 & 包税清关，免抛重，送货到家</h1>
        <p>MuluPost 服务范围包含仓储物流、空运与海运等增值服务，从清关到快递派送，无需担心一切繁琐的过程</p>
        <p>智能化物流系统实时追踪包裹位置信息，精准预测包裹送达时间，安全便捷准时收货</p>
        <p>价格优惠，空运每公斤低至 10RM，高效快速，三天完成跨境物流派送</p>
        <div class="home-btn">
          <div class="signin"> <router-link to="/">账号登录</router-link></div>
          <div class="signup"> <router-link to="/">立即注册</router-link></div>
        </div>
      </div>
      <div class="home-banner hidden-sm-and-up" >
        <div style="width:100%"></div>
         <el-carousel :height="bannerHeight" >
          <el-carousel-item v-for="(item,index) in homeBanner" :key="index">
            <img class="homeBanner" :src="item.src" :alt="item.alt" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="home-banner hidden-xs-only" >
          <ul class="home-banner-list">
            <li class="home-banner-item">
              <a class="home-banner-img" href="javascript:void(0)" target="_blank">
                <img src="https://c.mulupost.com/banner/7b918cb5-acb6-4671-a40e-58f23a950c19.png-600" alt="马来西亚商业海运">
              </a>
            </li>
            <li class="home-banner-item">
              <a class="home-banner-img" href="javascript:void(0)" target="_blank">
                <img src="https://c.mulupost.com/banner/f96e333c-b608-47c8-b55f-92f18ee52ab4.jpeg-600" alt="空运包机运输">
              </a>
            </li>
            <li class="home-banner-item">
              <a class="home-banner-img" href="javascript:void(0)" target="_blank">
                <img src="https://c.mulupost.com/banner/85aec6ac-889a-4284-bb1a-feb49d3e1e47.jpeg-600" alt="马来西亚海运立方，大货商家首选">
              </a>
            </li>
          </ul>
      </div>
      <div class="m-card sticky-top">
        <div class="main">
          <router-link class="item" v-for="(item, index) in mainCard" :key="index" to="">
            <div class="icon"></div>
            <div class="title">{{item.title}}</div>
          </router-link>
        </div>
      </div>
      <div class="home-portion">
        <div class="home-portion-hd">
          <h2>代运流程如何工作</h2>
          <p>
            <router-link  to="">
              how mulupost works
            </router-link>
          </p>
        </div>
        <div class="home-portion-bd hidden-xs-only">
          <p>MuluPost 基于智能化仓储物流技术，助您轻松完成国际货运、中国代运、淘宝集运</p>
          <p>专业服务，价格优惠，效率第一</p>
        </div>
      </div>
      <div class="home-process">
        <ul class="list clearfix">
          <li v-for="(item, index) in processList" :key="index">
            <div class="wrap">
              <div class="icon"></div>
              <div class="content">
                <p class="title">{{item.title}}</p>
                <p class="desc">{{item.desc}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="home-portion">
        <div class="home-portion-hd">
          <h2>集运增值服务</h2>
          <p>
            <router-link  to="">
              add-ons services
            </router-link>
          </p>
        </div>
        <div class="home-portion-bd hidden-xs-only">
          <p>除了提供基础代运与集运服务，还提供人性化的增值服务，让运输过程中更有保障</p>
          <p>以下是我们提供的增值服务，MuluPost 致力让整个运输体验更加完善</p>
        </div>
      </div>
      <div class="home-services">
        <ul class="list clearfix">
          <li v-for="(item, index) in servicesList" :key="index">
            <div class="wrap">
              <div class="title">{{item.title}}</div>
              <div class="icon"></div>
              <div class="price">{{item.price}}</div>
              <div class="desc">{{item.desc}}</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="home-portion">
        <div class="home-portion-hd">
          <h2>新闻动态</h2>
          <p>
            <router-link  to="">
              news tendency
            </router-link>
          </p>
        </div>
      </div>
      <div class="home-news">
        <ul class="list">
          <li v-for="(item,index) in newsList" :key="index">
            <div class="wrap">
              <router-link   to="">
                <div class="front"><img src=""  alt=""></div>
              </router-link>
               <router-link to="">
              <h3 class="title">{{item.title}}</h3>
              </router-link>
              <div class="summary">{{item.summary}}</div>
            </div>
           
          </li>
        </ul>
      </div>
      <div class="homeSeo">
        <!-- 这里是给百度爬虫爬取的、用户查看不到,此处经过css处理可放置想让蜘蛛爬取却不想用户见到的内容 -->
      </div>
    </div>
    <!-- bodyer结束 -->
  </div>
</template>

<script>
export default {
  name: "home",
  metaInfo() {
    return {
      title: this.meta.title,
      meta: [
        {
          name: "keywords",
          content: this.meta.keywords
        },
        {
          name: "description",
          content: this.meta.description
        }
      ],
      
    };
  },
  data() {
    return {
      meta: {
        title:
          "青玖科技有限公司官网-微信小程序定制-公众号定制-网站专业定制开发-app定制-运营推广-营销-十年从业经验专业技术团队",
        keywords:
          "网站定制,公众号定制,小程序定制,app定制,运营推广,营销,定制开发,做网站,做小程序,做软件,定制开发",
        description: "描述"
      },
      bannerHeight: "", //轮播图高度
      homeBanner: [
        {
          src: "https://www.qjtco.com/assets/image/banner1.jpg",
          alt: "网站、小程序、公众号、APP专业定制开发"
        },
        {
          src: "https://www.qjtco.com/assets/image/banner2.jpg",
          alt: "顶级品牌、顶级售后、顶级产品、办公工具、网址导航"
        },
        {
          src: "https://www.qjtco.com/assets/image/banner3.jpg",
          alt: "免费赠首年服务器、三个月免费运维、免费培训"
        }
      ],
      ourFriends: [
        {
          src: "https://www.qjtco.com/assets/image/friends1.png",
          alt: "阿里巴巴"
        },
        {
          src: "https://www.qjtco.com/assets/image/friends2.png",
          alt: "腾讯公益"
        },
        {
          src: "https://www.qjtco.com/assets/image/friends3.png",
          alt: "途客租车"
        },
        {
          src: "https://www.qjtco.com/assets/image/friends4.png",
          alt: "壹想食"
        },
        {
          src: "https://www.qjtco.com/assets/image/friends5.png",
          alt: "腾讯"
        },
        {
          src: "https://www.qjtco.com/assets/image/friends6.png",
          alt: "Adobe"
        },
        {
          src: "https://www.qjtco.com/assets/image/friends7.png",
          alt: "新网"
        },
        {
          src: "https://www.qjtco.com/assets/image/friends8.png",
          alt: "微软"
        }
      ],
      mainCard:[{
          title: '运费价格',
          url: ''
      },{
          title: '帮助中心',
          url: ''
      },{
          title: '物流查询',
          url: ''
      }],
      processList:[{
        title:'1. 包裹入库',
        desc:'邮寄您的包裹到我们的广州仓库，仓库会通知你包裹状态及包裹重量。',
        url:'',
        icon:''
      },
      {
        title:'2. 运单配货',
        desc:'当您提交运单，我们将分配和包装货物，完成后即可出货代运至马来西亚。',
        url:'',
        icon:''
      },
      {
        title:'3. 邮寄运单',
        desc:'根据您选择的运输方式，包裹将通过空运或海运邮寄给您，并提供追踪单号。',
        url:'',
        icon:''
      },
      {
        title:'4. 签收包裹',
        desc:'我们的本地快递员将准时地将包裹寄送给您指定的收货地址，简单且快速。',
        url:'',
        icon:''
      }],
      servicesList:[{
         title:'空运拆外包装',
         desc:'空运可拆开包裹的外包装，以减轻整体的重量。',
         icon:'',
         price:'FREE / 免费'
        },{
         title:'空运拆内包装',
         desc:'空运可拆开包裹的内外包装，以减轻整体的重量。',
         icon:'',
         price:'FREE / 免费'
        },{
         title:'易碎标签',
         desc:'贴上易碎标签，避免包裹里的货品在运输途中破碎。',
         icon:'',
         price:'FREE / 免费'
        },{
         title:'拍照验货',
         desc:'拆开包裹并拍照包裹里的商品，会提供2至5张照片。',
         icon:'',
         price:'¥5/件'
        }
      ],
      newsList:[{
        icon:'',
        url:'',
        title:'2021国际劳动节放假公告',
        summary:'劳动节放假三天，仓库暂停出货，请合理安排出货时间'
      },{
        icon:'',
        url:'',
        title:'运费降价公告',
        summary:'大货海运下调 90RMB/CMB，Mar 19 2021 开始生效'
      },{
        icon:'',
        url:'',
        title:'元宵节 · 宜降价',
        summary:'海运小包下调 1-3 人民币每公斤，大货海运下调 50 人民币每立方'
      },{
        icon:'',
        url:'',
        title:'年前截止发货倒计时',
        summary:'年前发货工作安排已经接近尾声，发货截止时间为 04 Feb 18:00:00'
      }]
    };
  },
  created() {
    // axios获取home数据
    this.$axios
      .get("api/home")
      .then(res => {
        // console.log(res.data);
        this.meta = res.data.meta;
        this.homeBanner = res.data.homeBanner;
        this.ourFriends = res.data.ourFriends;
      })
      .catch(function(error) {
        console.log(error);
      });
    // 获取当前窗口宽度通过计算动态设置轮播图高度
    this.bannerHeight = (document.body.clientWidth * 400) / 1390 + "px";
  },
  mounted() {
    // 动态设置meta
  }
};
</script>
<style lang="less" scoped>
div{
  box-sizing: border-box;
}
.wrapper {
  // 解决轮播图ie低版本滚动条问题
  .el-carousel {
    overflow: hidden;
  }
  // element轮播图组件样式
  .homeBanner {
    width: 100%;
    height: auto;
  }
  // 其他样式
  #homeBodyer {
    .sticky-top {
      position: sticky;
      z-index: 3;
      top: 0px;
      background-color: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(2px);
    }
    .home-intro{
      margin: 36px 0;
      text-align: center;
      background-color: #fff;
      h1{
        color: #000000;
        font-family: "Noto Serif", "PT Serif", "source-han-serif-sc", "Songti SC", serif;
        font-size: 26px;
        line-height: 40px;
        margin-bottom: 20px;
        text-shadow: 0 1px 0 #fff;
      }
      p{
        color: #333333;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 8px;
      }
      .home-btn{
        margin-top: 24px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        .signin,.signup{
          cursor: pointer;
          display: inline-block;
          height: 46px;
          line-height: 46px;
          width: 200px;
          max-width: 40%;
          vertical-align: middle;
          border-radius: 4px;
          border: 1px solid #007fff;
          font-size: 17px;
          font-weight: 500;
        }
        .signin{
          background-color: #007fff;
          margin-right: 12px;
          a{
          color: #ffffff;
          }
        }
         .signup{
           a{
            color: #007fff;
           }
          background-color: #ffffff;
          margin-right: 12px;
        }
      }
    }
    // banner轮播图
    .home-banner{
      background-color: #fff;
      position: relative;
      margin: 32px 0;
      z-index: 1;
      .home-banner-list{
        display: flex;
        .home-banner-item{
          margin-right: 20px;
          flex: 1;
        }
      }
    }
    .m-card{
      margin: 8px 0;
      border: 1px solid #eeeeee;
      background-color: #fff;
      a{
        color:#333
      }
      .main{
        display: flex;
        flex: 1;
        overflow: hidden;
        .item{
          flex: 1;
          text-align: center;
          padding: 12px 0;
          position: relative;
          border-left: 1px solid #eeeeee;
        }
        .item:first-child {
            border-left: none;
        }
        .icon{
          width: 32px;
          height: 32px;
          margin: 0 auto;
        }
        .title{
          font-weight: 500;
          font-size: 14px;
          line-height: 18px;
          margin-top:6px;
        }
      }
    }
    .home-portion{
      background-color: #fff;
      margin: 36px 0;
      text-align: center;
      .home-portion-hd{
        margin-bottom: 24px;
        font-family: "Noto Serif", "PT Serif", "source-han-serif-sc", "Songti SC", serif;
        text-shadow: 0 1px 0 #fff;
        h2{
        color: #000000;
        font-size: 26px;
        line-height: 32px;
        margin: 0;
      }
      p{
        color: #666666;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 10px;
        font-weight: normal;
        a{
          color: inherit;
        }
      }
      }
      .home-portion-bd{
        p{
          color: #000000;
          font-size: 16px;
          line-height: 20px;
          margin-bottom: 8px;
          font-weight: 500;
        }
      }
    }
    .home-process{
      background-color: #fff;
      ul{
        li{
          float: left;
          width: 50%;
          padding-bottom: 40px;
          .wrap{
            display: flex;
            padding: 0 12px;
            align-items: center;
            .icon{
              width: 48px;
              height: 48px;
              margin-right: 12px;
            }
            .content{
              flex: 1;
              .title{
                color: #000000;
                font-weight: 500;
                font-size: 18px;
                line-height: 24px;
                margin-bottom: 4px;
              }
              .desc {
                color: #666666;
                font-size: 16px;
                line-height: 22px;
              }
            }
          }
        }
      }
    }
    .home-services{
      text-align: center;
      background-color: #fff;
      ul{
        li{
          float: left;
          width: 25%;
          margin-bottom: 32px;
          .wrap{
            width: 100%;
            height: 100%;
            .title{
              color: #000000;
              font-weight: 500;
              font-size: 18px;
              line-height: 24px;
            }
            .icon{
              width: 72px;
              height: 72px;
              margin: 16px auto;
              display: block;
              border-radius: 4px;
            }
            .price{
              color: #007fff;
              font-size: 14px;
              line-height: 20px;
            }
            .desc{
              color: #999999;
              font-size: 14px;
              padding: 0 12px;
              line-height: 20px;
              height: 40px;
              overflow: hidden;
            }
          }
        }
      }
    }
    .home-news{
      background-color: #fff;
      ul.list{
        display: flex;
        li{
          flex: 1;
          margin-right: 16px;
        .wrap{
          text-align: center;
           .front{
            position: relative;
            // width:100%;
            padding-top: 60%;
            border-radius: 4px;
            overflow: hidden;
            background-color: #eeeeee;
            >img{
              position: absolute;
              left: 0;
              width: 100%;
              top: 0;
            }
          }
          .title{
            color: #000000;
            font-family: "Noto Serif", "PT Serif", "source-han-serif-sc", "Songti SC", serif;
            font-size: 18px;
            line-height: 24px;
            height: 24px;
            overflow: hidden;
            text-align: center;
            margin: 6px 0;
          }
          .summary {
            color: #666666;
            font-size: 14px;
            line-height: 20px;
            height: 40px;
            overflow: hidden;
            text-align: center;
        }
        }
        }
      }
    }
    // 隐藏给百度爬虫看的内容
    .homeSeo {
      width: 0px;
      height: 0px;
      position: fixed;
      z-index: 9999;
    }
    overflow: hidden;
  }
    // 首页响应式
  @media screen and (max-width: 768px) {
    #homeBodyer {
    background-color: #fafafa;
      .home-banner{
        overflow: hidden;
        margin: 8px 0;
        display: block;
      }
      .sticky-top {
          top: 60px!important;
      }
      .home-portion{
        background-color: #fff;
        margin:8px 0 0;
        // border-top: 8px solid #fafafa;
        padding: 8px 12px;
        background-color: #ffffff;
        position: relative;
        .home-portion-hd{
          margin-bottom: 0;
          h2 {
              font-size: 20px;
              line-height: 24px;
          }
          p {
            margin-bottom: 0;
            font-size: 14px;
            line-height: 16px;
            margin-top: 4px;
          }
        }
      }
      .home-portion:after {
          content: " ";
          position: absolute;
          z-index: 2;
          pointer-events: none;
          left: 0;
          bottom: 0;
          right: 0;
          height: 1px;
          border-bottom: 1px solid #eeeeee;
          color: #eeeeee;
          transform-origin: 0 100%;
          transform: scaleY(0.5);
      }
      .home-process{
        ul{
          li{
            float: none;
            width: auto;
            padding-bottom: 14px;
            .wrap{
              margin-left: 0;
              .content{
                  .title{
                    font-size: 16px;
                    line-height: 22px;
                  }
                  .desc {
                    font-size: 14px;
                    line-height: 18px;
                  }
              }
            }
          }
        }
     
      }
      .home-services{
        ul{
          li{
            width: 50%;
            margin: 16px 0 0;
            .wrap{
              .title{
                font-size: 16px;
                line-height: 22px;
              }
              .icon{
                width: 64px;
                height: 64px;
              }
              .desc{
                font-size: 13px;
                line-height: 20px;
                padding: 0 6px;
              }
            }
          }
        }
      }
      .home-news{
      background-color: #fff;
      padding: 0 6px;
      background-color: #ffffff;
      margin-bottom: 8px;
      position: relative;
      ul.list{
        display: block;
        li{
          float: left;
          width: 50%;
          max-width: auto;
          flex: auto;
          margin: 12px 0;
        .wrap{
          padding: 0 6px;
           .front{
            position: relative;
            width: 100%;
            border-radius: 4px;
            overflow: hidden;
            background-color: #eeeeee;
            >img{
              position: absolute;
              left: 0;
              width: 100%;
              top: 0;
            }
          }
          .title{
            font-size: 16px;
            line-height: 22px;
            height: 22px;
            text-align: center;

          }
          .summary {
         
           }
          }
        }
      }
    }
    }
  }

}
</style>