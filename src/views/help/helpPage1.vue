<template>
   <div class='helpPage1'>
      <div class="subhead-right">
        <a @click.prevent="" class="breadBtn breadBtn-primary">
            <span>联系客服</span>
        </a>
      </div>
      <div class="main">
        <h1 class="article-title">包裹已经送达仓库，但未见代运订单</h1>
		    <div class="summary">请在会员中心添加包裹</div>
        <div class="content">
          <p>包裹已经寄到 MuluPost 仓库，但还未有代运订单时，请先检查是否在 MuluPost 会员中心—我的包裹，如没有可行添加中国快递单号并提交运单。</p>
          <p></p>
          <p>异常包裹：有时候会包裹面单上没有显示UID 号码，我们并不知道该包裹属于哪位会员。如您发现有包裹并未录入系统可自行添加。</p>
          <p></p>
          <p>我的包裹有以下两种状态：</p>
          <ol>
            <li>重量：<span style="color: #f39c12;">待入库</span> （仓库未收到包裹）；</li>
            <li>重量：XX kg（仓库已收到包裹）</li>
          </ol>
          <p>温馨提示：包裹运送请按照流程先在 MuluPost 会员中心添加包裹并提交代运订单，包裹到库签收后，我们将验货入库及时运送到你的海外地址。</p>
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
      ol{
        li{
          margin: 6px 0;
          line-height: 20px;
        }
        padding-left: 20px;
        list-style: decimal;
        margin-top: 16px;
      }
    }
  }
</style>