<template>
   <div class='deposit'>
      <div class="subhead-right">
        <a @click.prevent="" class="breadBtn breadBtn-primary">
            <span>联系客服</span>
        </a>
      </div>
      <div class="main">
        <h1 class="article-title">如何充值进我的钱包</h1>
		    <div class="summary">人民币，马币均可充值，即时到账，方便快捷</div>
        <div class="content">
          <p>钱包余额可用于运费付款、提现，每一笔充值记录及消费记录均可实时查询</p>
          <p>充值结算方便快捷，以下是充值流程：</p>
          <h3>一、马令吉（MYR）Online Banking</h3>
          <p>马币转账请备注您的ID  即可自动到账</p>
          <ul>
            <li>银行：CIMB</li>
            <li>账号：8010580955</li>
            <li>账户：BosuPost Trading</li>
          </ul>
          <h3>二、马令吉（MYR）淘宝充值</h3>
          <p>淘宝充值支持 VISA、RHB、Maybank、CIMB 等多家银行，付款后即时到账，无须等待。完成充值后入账金额为淘宝订单中充值金额（RMB），汇率为淘宝结算的实时汇率比代付等方式更高。</p>
          <p>需要注意的是该方式淘宝会收取手续费，费率为 VISA 3.0%、其他网上银行 1.5% 。具体以淘宝交易结算收取费率为准。</p>
          <p>淘宝充值地址：<a href="">https://item.taobao.com/item.htm?id=606980911157</a></p>
          <h3>三、人民币（CNY）在线充值</h3>
          <p>BosuPost 结算系统对接微信支付 Wechat Pay、支付宝 Alipay 在线支付渠道，使用在线扫码支付付款安全快捷，即时到账，无手续费。</p>
          <p>温馨提醒：需要代付1688、拼多多、支付宝余额，可联系我们。</p>
          <p>以上为 BosuPost 主要的充值方式，如需咨询其他问题，请联系在线客服。</p>
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