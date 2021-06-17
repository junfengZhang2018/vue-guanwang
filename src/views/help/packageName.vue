<template>
   <div class='packageName'>
      <div class="subhead-right">
        <a @click.prevent="" class="breadBtn breadBtn-primary">
            <span>联系客服</span>
        </a>
      </div>
      <div class="main">
        <h1 class="article-title">如何填写包裹名称</h1>
		    <div class="summary">添加包裹的时候包裹名称该怎么填写</div>
        <div class="content">
          <p>包裹名称用于更好的区别包裹对应的商品，同时 BosuPost 仓库在包装操作过程中也可以更好的帮您识别出普货、敏感货、禁运物品，这很重要，有以下好处：</p>
          <ol>
            <li>避免使用不当的渠道运输货物，导致发货延迟；</li>
            <li>若普货使用敏感货渠道运输，仓库会建议您使用普货运输节省运费；</li>
            <li>若敏感货使用普货渠道运输，仓库会建议您使用敏感货，避免被海关退货；</li>
            <li>禁运物品无法运输，我们可以帮您做退货处理，避免损失、节省时间；</li>
          </ol>
          <p>请务必如实填写包裹中的商品名称，建议使用在线商城中完整的商品名称作为包裹名称，若一个包裹中有多件商品可一并填入作为包裹名称</p>
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