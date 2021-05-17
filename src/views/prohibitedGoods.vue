<template>
   <div class='prohibitedGoods'>
       <div class="subhead-right">
					<a @click.prevent="" class="breadBtn breadBtn-success">
						<span>帮助中心</span>
					</a>
        </div>
        <div class="main">
          <h1 class="article-title">禁运物品分辨</h1>
					<div class="summary">
						<div class="text-success">凡是涉及以上类物品均属于违禁，将无法托运，主要有以下几类</div>
					</div>
					<div class="content">
            <p>禁运物品主要是指威胁航空飞行安全的物品，指在航空运输中可能明显地危害人身健康，安全或对财产造成损害的物品或物质。</p>
            <p  class="text-success"><strong>以下为淘宝代运敏感货分类：</strong></p>
            <h3 class="text-info">一、货币</h3>
            <ol>
              <li>所有国家货币（现金等），有价证券；</li>
              <li>伪造的国家货币及背书的股票，债券等；</li>
              <li>及国家法令禁止流通或寄递的货物；</li>
            </ol>
             <h3 class="text-info">二、国际航空运输协会（IATA）限制的物品</h3>
              <ol>
                <li>容易腐烂的物品，各种活的动物；</li>
                <li>传染性，感染性物质；</li>
                <li>这类物品在输中很难维持鲜活状态；</li>
                <li>容易导致生物死亡或变质变味滋生细菌；</li>
                <li>危害人体健康；</li>
              </ol>
             <h3 class="text-info">三、爆炸性，易燃性及挥发性等各种危险物品</h3>
              <ol>
                <li>压缩气体、铁罐喷雾、丁烷、丙烷、氢气；</li>
                <li>水中呼吸氧气筒、打火机、烟雾剂、兵乓球；</li>
                <li>药、爆竹、汽油、酒精、煤油、生漆、火柴等；</li>
                <li>所有列入化学工业出版社出版的《化学危险品实用手册》中的化工产品；</li>
              </ol>
              <h3 class="text-info">四、各类毒品及吸毒工具</h3>
              <ol>
                <li>非正当用途麻醉药品和精神药品；</li>
                <li>非正当用途的易制毒化学品；</li>
                <li>如：冰壶、冰毒、海洛因、大麻、可卡因、麻黄素、甲苯、丙酮、胡椒醛、黄樟素等；</li>
              </ol>
              <h3 class="text-info">五、任何有关非法传销，淫秽，邪教</h3>
              <ol>
                <li>反社会活动相关的物品；</li>
                <li>淫秽书籍、反动报刊等；</li>
              </ol>
             <p class="text-success">如无法分辨货物类型，可联系 MuluPost 货运客服，我们将为你提供协助</p>
             <p><a class="button button-primary"><img src="" alt=""> 联系客服</a></p>
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
      background-color: #fff;
      min-height: 570px;
      padding: 14px;
      line-height: 1.625;
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
      .text-success{
        color: #059603;
      }
      .text-info{
       color: #586C94;
      }
      .text-warning {
        color: #d46419;
      }
      .text-gray{
        color: #666666;
        font-size: 13px;
      }
      .content{
        text-align: justify;
        background-color: #fff;
        >p{
          margin-top: 16px;
        .button{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          text-align: center;
          line-height: 24px;
          font-size: 16px;
          padding: 4px 8px;
          white-space: nowrap;
          color: #fff;
        }
        .button-primary{
          background-color: #198cff;
          border: 1px solid #007fff;
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
      }
    }
  @media screen and (max-width: 768px) {
    .main{
      padding: 12px;
      .content{
        ul{
          li{
            width: 50%!important;
            margin: 16px 0 0;
            .wrap{
              .title{
              
              }
              .icon{
             
              }
              .desc{
           
              }
            }
          }
        }
      }
    }
  }
</style>