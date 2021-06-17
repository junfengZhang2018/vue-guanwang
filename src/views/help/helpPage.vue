<template>
   <div class='helpPage'>
      <div class="subhead-right">
        <a @click.prevent="" class="breadBtn breadBtn-primary">
            <span>联系客服</span>
        </a>
      </div>
      <div class="main">
        <h1 class="article-title">首次使用代运须知</h1>
		    <div class="summary">有关包裹代运/物流服务您需要了解的事</div>
        <div class="content">
          <p><strong>代运流程</strong></p>
          <p>包裹寄到仓库，寄送前建议做好<a href="">国际运费评估</a> ，再提交运单。</p>
          <p>1）注册BosuPost 账户获取<a href="">仓库地址</a> ，把仓库地址设为收货地址。</p>
          <p>2）包裹入库后，多个在库包裹集合生成一个运单。 支付订单费用后，就能开始国际运送。</p>
          <p><strong>服务范围</strong></p>
          <p>一般情况下，代运包裹入库后测量重量及体积，集合多个包裹包装后装车出库。不提供具体盘点及专业质量检测服务，如果需要核实商品数量，颜色，尺码等信息请使用<a href="">增值服务</a></p>
          <p><strong>物流风险</strong></p>
          <p><strong>包裹由第三方物流商承运，受海关政策限制且可能存在物流风险，需要自行评估并承担。</strong></p>
          <p>BosuPost 作为服务平台，集成第三方国际物流商为您提供代运包裹寄送服务，不承担由海关政策和跨境物流运输中不可控因素造成的风险，如海关查验、罚没、损坏、丢件、高峰期寄送时效延迟等。 BosuPost 将通过提供及时的风险提醒和不断完善的物流保险等措施来辅助您进行风险预估，降低损失概率。</p>
          <p></p>
          <p>国际寄送流程长、环节多，不同物流公司、不同国家的海关和当地派送都不一样，基于国际物流的复杂性会有一定的概率出现意外情况，（如敏感当普货出被没收、延误、罚没、征税、破损、丢失等），BosuPost 无法控制和避免第三方物流商和各国海关会出现的服务质量和意外情况。但我们一定会对您负责，包括根据各线路和国家的情况事先告知提醒用户，在时效延误时为您与物流商进行交涉解决问题。</p>
          <p class="">特殊情况发生时，不属于预计时效范围，如下：</p>
          <p>1.港口塞满拥堵，大船甩柜，海关开柜查验，清关慢；</p>
          <p>2.偏远地区送货慢、目的地仓库货物较多爆满时派送缓慢；</p>
          <p>3.节假日前过后清关慢，送货慢；</p>
          <p>4.台风等恶略天气影响；</p>
          <p>5.航班故障延误，航班少等不可抗力因素延误时效。</p>
          <p>在特殊情况发生时我们会协助您，尽力催促安排将货物送到您手上。<br></p>
          <p>温馨提示：所有渠道包税通关，不涵盖<strong>海关查验</strong>范围。如果您包裹有较严格时间要求，比如用于急需用品、旅游、活动、婚礼等，千万不要完全相信物流预计的时效，尽可能多预留多点时间。</p>
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
    }
  }
</style>