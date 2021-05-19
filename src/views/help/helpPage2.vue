<template>
   <div class='helpPage2'>
      <div class="subhead-right">
        <a @click.prevent="" class="breadBtn breadBtn-primary">
            <span>联系客服</span>
        </a>
      </div>
      <div class="main">
        <h1 class="article-title">包裹在仓库可以存放多久</h1>
		    <div class="summary">代运包裹保存期限为180天</div>
        <div class="content">
          <p>一、代正常包裹保存期限为 90 天，订单状态 “已入库” 开始计算，超过 60 天及 80 天，系统会发送邮件提示包裹状态，超 90 天仍未提交包裹运单或未做任何反馈将视放弃商品，我们将统一对过期的商品做销毁处理。 </p>
          <p>二、异常包裹（即先签收包裹未提交订单或未填写快递单号添加包裹的情况）期限为 60 天，自订单状态 “已签收” 开始计算，由于此类包裹无法匹配相关的订单以及用户，所以无法做出提醒，超期 MuluPost 国际货运将视为放弃保管并销毁。</p>
          <h3>相关细则：</h3>
          <ol>
            <li>在保管期内由 MuluPost 负责对商品进行保管并承担相应责任，但商品的保质期不在保管范围内（例如：易变质物品保质期只有1个月）；</li>
            <li>销毁的商品不再做任何提示；</li>
          </ol>
          <p>为避免商品销毁，请您在保管有效期内及时提交包裹运单。</p>
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