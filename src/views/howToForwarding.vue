<template>
   <div class='howToForwarding'>
      <div class="subhead-right">
        <a @click.prevent="$router.push('/help')" class="breadBtn breadBtn-success">
            <span>帮助中心</span>
        </a>
      </div>
      <div class="main">
        <h1 class="article-title hidden-xs-only">如何淘宝代运到马来西亚或新加坡</h1>
		    <div class="summary hidden-xs-only"><div class="text-success">BosuPost 安全仓储、高效运输的系统，从清关到快递派送我们简化了所有流程，以下为马来西亚中国淘宝代运图文教学</div></div>
        <div class="content">
          <div class="wraper">
            <div class="how-step">
              <div class="num">1</div>
              <div class="flex-item">
                <div class="title">注册或登录 BosuPost</div>
                <div class="desc">前往<a href="">注册 / 登录</a>页面，使用快捷登录或输入账号密码完成登录或注册。</div>
              </div>
            </div>
            <div class="how-img"><img src="../assets/images/howToForwarding1.jpg" alt=""></div>
          </div>
          <div class="wraper">
            <div class="how-step">
              <div class="num">2</div>
              <div class="flex-item">
                <div class="title">添加BosuPost仓库地址为 <span class="hidden-xs-only">代运包裹</span>收货地址</div>
                <div class="desc">前往淘宝等网站的账户管理，设置收货地址，添加 BosuPost 中国代运仓库地址。</div>
              </div>
            </div>
            <div class="how-img"><img src="../assets/images/howToForwarding2.jpg" alt=""></div>
          </div>
          <div class="wraper">
            <div class="how-step">
              <div class="num">3</div>
              <div class="flex-item">
                <div class="title">自动入库，免填单「仓库操作」</div>
                <div class="desc">仓库签收包裹后系统将自动为您创建包裹单号，录入商品及重量信息。</div>
              </div>
            </div>
            <div class="how-img"><img src="../assets/images/howToForwarding3.jpg" alt=""></div>
          </div>
          <div class="wraper">
            <div class="how-step">
              <div class="num">4</div>
              <div class="flex-item">
                <div class="title">填写运输资料，提交运单</div>
                <div class="desc">填写邮寄到马来西亚新加坡等收货地址，选择运输方式，提交运单即可开始代运。</div>
              </div>
            </div>
            <div class="how-img"><img src="../assets/images/howToForwarding4.jpg" alt=""></div>
          </div>
          <div class="wraper">
            <div class="how-step">
              <div class="num">5</div>
              <div class="flex-item">
                <div class="title">签收代运包裹，完成运输</div>
                <div class="desc">仓库当天完成包装作业并运输包裹，每天 18:00 发货 (法定假日休假不发货)。</div>
                <div class="desc">运输过程遇到任何疑问，可随时与我们取得联系  <a href="">在线客服</a>。</div>
              </div>
            </div>
            <div class="how-img"><img src="../assets/images/howToForwarding5.jpg" alt=""></div>
          </div>
        </div>
      </div>
   </div>
</template>

<script>
   // import 《组件名称》 from '《组件路径》';

    export default {
        metaInfo() {
            return {
                title: 'BosuPost',
                meta: [
                    {
                        name: "keywords",
                        content: "如何代运"
                    },
                    {
                        name: "description",
                        content: ""
                    }
                ]
            };
        },
        components: {},
        data() {
        //这里存放数据
            return {
              
            };
        },
        //监听属性 类似于data概念
        computed: {},
        //监控data中的数据变化
        watch: {},
        //方法集合
        methods: {
        
        },
        //生命周期 - 创建完成（可以访问当前this实例）
        created() {
        
        },
        //生命周期 - 挂载完成（可以访问DOM元素）
        mounted() {
        
        },
        beforeCreate() {}, //生命周期 - 创建之前
        beforeMount() {}, //生命周期 - 挂载之前
        beforeUpdate() {}, //生命周期 - 更新之前
        updated() {}, //生命周期 - 更新之后
        beforeDestroy() {}, //生命周期 - 销毁之前
        destroyed() {}, //生命周期 - 销毁完成
        activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
    }
</script>
<style lang='less' scoped>
  .main{
    width: 100%;
    background-color: #fff;
    padding: 14px;
    line-height: 1.625;
    box-sizing: border-box;
    h2, h3 {
      margin-top: 24px;
      margin-bottom: 16px;
      font-size: 18px;
      line-height: 24px;
        font-weight: bold;
    }
    .article-title{
      text-align: center;
      font-size: 26px;
      line-height: 36px;
      padding: 6px 0;
      font-weight: bold;
      margin-bottom: 16px;
    }
    .summary{
      text-align: center;
      font-size: 14px;
      color: #666;
      margin: 12px 0;
    }
    .content{
      .wraper{
          position: relative;
          margin-top: 10px;
          a{
            color: #007fff;
            cursor: pointer;
            text-decoration: underline;
          }
        .how-img{
          img{
            vertical-align: middle;
            max-width: 100%;
            font-size: 12px;
            color: #666666;
          }
        }
        .how-step{
          display: flex;
          padding: 8px 0;
          align-items: center;
          .num{
            width: 56px;
            height: 56px;
            line-height: 56px;
            font-size: 48px;
            text-align: center;
            color: #000000;
          }
          .num::after{
            content: '.';
          }
          .flex-item{
            flex: 1;
            .title{
              font-size: 18px;
              line-height: 24px;
              font-weight: bold;
              margin-bottom: 2px;
            }
            .desc{
              font-size: 16px;
              line-height: 22px;
            }
          }
        }
      }
    }
  }
</style>