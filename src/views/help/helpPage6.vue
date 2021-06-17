<template>
   <div class='helpPage6'>
      <div class="subhead-right">
        <a @click.prevent="" class="breadBtn breadBtn-primary">
            <span>联系客服</span>
        </a>
      </div>
      <div class="main">
        <h1 class="article-title">商家发货后多久可送达仓库</h1>
		    <div class="summary">商家发货送达仓库时效</div>
        <div class="content">
          <ol>
            <li>中国大陆境内淘宝、天猫、拼多多等商家一般 1~3 天内发货（部分订制、预售款除外）；</li>
            <li>京东自营商品物流当天会发货，并在隔天送达（非自营，加盟商户通常 1~3 天发货）；</li>
          </ol>
          <p>具体发货时间以卖家实际情况为准。</p>
          <p>BosuPost 国际货运仓库位于广东省广州市白云区，珠三角地区的卖家发货正常 1~2 天即可送达，其它地区，通常需要 2~3 天。</p>
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