<template>
   <div class='faq'>
      <div class="subhead-right">
        <a @click.prevent="" class="breadBtn breadBtn-primary">
            <span>联系客服</span>
        </a>
      </div>
      <div class="main">
        <h1 class="article-title">常见问题</h1>
        <div class="content">
          <h3>一、包裹与运单</h3>
          <ul class="faqs">
            <li class="active">
              <div class="top">包裹入库后会提供重量吗？</div>
              <div class="bot">包裹入库后，系统会显示包裹的重量和入库时间，我们会以电邮或微信给您发送通知。</div>
            </li>
            <li class="active">
              <div class="top">如何分辨普货和敏感货商品？</div>
              <div class="bot">空运普货是（服饰，鞋包，家具，母婴用品，运动用品，无电池类电器，无磁铁货品，书籍）的商品，敏感货则是（仿牌／正版商品，正品玩偶，高价值商品，珠宝，液体，粉状物，药，光碟，视频，正版商品，电磁类，电器）的商品。<br><div>海运的普货和敏感与空运有些不同，<a href="">点击请查详情</a></div></div>
            </li>
            <li class="active">
              <div class="top">能在包裹列表查询中国快递信息吗？</div>
              <div class="bot">只需添加正确的包裹快递号，即可查询所有中国的快递信息。无需使用淘宝APP或其他网址查看。</div>
            </li>
            <li class="active">
              <div class="top">添加包裹时，找不到对应货品种类怎么办？</div>
              <div class="bot">如果遇到这类情况，请 <a href="">联系客服</a>，客服将为您建议合适的对应货品种类。</div>
            </li>
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
      .link,a{
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
          .top{
            color: #586C94;
            display: inline-block;
            cursor: pointer;
          }
          .bot{
            display: none;
            font-size: 14px;
            line-height: 20px;
            margin: 12px 0 20px;
          }
        }
        li.active .bot{
          display: block;
        }
      }
    }
  }
</style>