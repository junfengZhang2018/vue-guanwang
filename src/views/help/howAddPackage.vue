<template>
   <div class='howAddPackage'>
      <div class="subhead-right">
        <a @click.prevent="" class="breadBtn breadBtn-primary">
            <span>联系客服</span>
        </a>
      </div>
      <div class="main">
        <h1 class="article-title">如何添加包裹</h1>
		    <div class="summary">全自动入库免填单</div>
        <div class="content">
          <p>MuluPost 为每位会员创建 <a href="">唯一收货地址</a></p>
          <p>在完成淘宝、天猫或其他任意平台购物后，无须重复到会员中心进行添加包裹操作。</p>
          <p>包裹送达仓库后会自动入库，系统将识别运单号码、包裹名称、计算重量与体积、分配最佳仓位、主动将入库包裹添加您的包裹列表。</p>
          <h3>如包裹未能及时自动入库，可使用主动 <a href="">添加包裹</a></h3>
          <p>提交运单前请先核对包裹数量，包裹面单出现没有ID号码的情况导致无法自动入仓，如发现您的包裹未出现，可自行添加包裹。</p>
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