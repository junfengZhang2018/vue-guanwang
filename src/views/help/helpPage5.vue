<template>
   <div class='helpPage5'>
      <div class="subhead-right">
        <a @click.prevent="" class="breadBtn breadBtn-primary">
            <span>联系客服</span>
        </a>
      </div>
      <div class="main">
        <h1 class="article-title">代运包裹签收及验货规则</h1>
		    <div class="summary">验货规则</div>
        <div class="content">
          <ol>
            <li>仓库签收包裹时，如发现外包装有严重破损等不符合收货要求的货物，会直接拒收或退货。</li>
            <li>如果您的包裹一切正常，仓库会进行称重入库。<strong>如您对包裹的重量有疑问，请及时联系客服协助处理</strong></li>
            <li>如发现您的货物不符合运输和航空运输的要求，您的一对一客服会跟您沟通协商适宜。</li>
            <li>我们的仓库地址在广东省，一般国内寄送的周期为 3-5 天，如添加物流信息后，仓库的还未收到包裹，请联系您的国内物流公司或网站客服人员确认货物的状态。</li>
            <li>包裹入库后仓库人员会做具体核对和检查，只会做违禁品排查（易碎，易折损，快递箱充当商品包装箱，还有超大件商品等扔保留原箱，具体情况以实际操作为准）</li>
          </ol>
          <h3>注意事项：</h3>
          <ul>
            <li>玻璃、镜子，易折损商品，BosuPost 会帮您加固且贴上易碎标签，但寄送过程中导致破裂BosuPost 不承担相关赔偿责任，建议出货前联系卖家加固打包；</li>
            <li>色差、尺码误差、使用效果等不属于验货范围；</li>
            <li>电器、数码产品、周边产品等专业性强的商品，其质量、型号、零配件等不在验货范围内；</li>
            <li>“CD”以及“手办”“成人用品”类商品，此类密封包装的及带有封口标签或封口条的商品验货规则为不拆封验货，只能检验到外观是否有损，内件详情无法具体核实；</li>
            <li>如寄达仓库的包裹有任何问题，请与发件人联系核实，BosuPost 不承担相关赔偿责任。</li>
          </ul>
        </div>
      </div>
   </div>
</template>

<script>
   // import 《组件名称》 from '《组件路径》';
    export default {
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
      >p{
        margin-top: 16px;
      }
      a{
        color: #007fff;
        cursor: pointer;
        text-decoration: underline;
      }
      .img-wraper{
        img{
          vertical-align: middle;
          max-width: 100%;
          font-size: 12px;
          color: #666666;
        }
      }
      ol{
        li{
          margin: 6px 0;
          line-height: 20px;
        }
        padding-left: 20px;
        list-style: decimal;
        margin-top: 16px;
      }
       ul{
        padding-left: 20px;
        list-style: disc;
        margin-top: 16px;
        li{
          margin: 6px 0;
          line-height: 20px;
        }
      }
    }
  }
</style>