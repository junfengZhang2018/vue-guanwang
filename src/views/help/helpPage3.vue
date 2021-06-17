<template>
   <div class='helpPage3'>
      <div class="subhead-right">
        <a @click.prevent="" class="breadBtn breadBtn-primary">
            <span>联系客服</span>
        </a>
      </div>
      <div class="main">
        <h1 class="article-title">如何查看商家发货快递单号</h1>
		    <div class="summary">国内快递单号查询</div>
        <div class="content">
          <h3>淘宝物流单号</h3>
          <p>物流信息与商品清单一样重要；当您在购物网站订购好商品以后，您需要在BosuPost填写订物流单号。</p>
          <p>打开淘宝网，点击【已买到的宝贝】点击【查看物流】复制单号</p>
          <div class="img-wraper">
            <img src="https://c.mulupost.com/article/e4dfa977-ad82-4d4b-899c-aa17bfcd4011.png-720.jpg" alt="">
          </div>
          <p>温馨提示：</p>
          <ul>
            <li>只有正确填写了物流信息的代运订单，我们才能为您验货、入库，商家发货后请及时在BosuPost会员中心填写物流单号。<a href="">查看包裹保管期限>></a></li>
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