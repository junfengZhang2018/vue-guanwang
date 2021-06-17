<template>
   <div class='halfFullNoThrow'>
       <div class="subhead-right">
					<a @click.prevent="" class="breadBtn breadBtn-success">
						<span>帮助中心</span>
					</a>
        </div>
        <div class="main">
          <h1 class="article-title">什么是全抛、免抛、半抛</h1>
					<div class="summary">
						<div class="text-success">全抛、免抛、半抛是货物计费重量的计算方式</div>
					</div>
					<div class="content">
              <h3>一、计费方式</h3>
              <ul>
                <li>免抛：只按实际重量计费</li>
                <li>半抛：(实际重量 + 体积重量) ÷ 2</li>
                <li>全抛：实际重量与体积重量取大计费</li>
              </ul>
              <h3>二、体积重量计算公式</h3>
              <p>遵照国际航空协会(IATA)规定的计算公式：</p>
              <p><span class="fontBold">体积重量</span> = 长cm × 宽cm × 高cm ÷ 6000</p>
              <h3>三、抛重计算器</h3>
              <p>使用 <a href="">BosuPost 价格计算器</a> ，输入重量尺寸则可以准确的预算计费重量以及运费，及抛重信息。</p>
              <h3>四、空运免抛</h3>
              <ul>
                <li>绝大数情况空运都是免抛运输，即只计算实际重量</li>
                <li>具体免抛重量额度可 <a href="">查询价格表</a></li>
                <li>若超出免抛额度按照半抛计费</li>
              </ul>
              <h3>五、海运全抛</h3>
              <ul>
                <li>海运成本主要是空间</li>
                <li>海运小包按全抛计算运费</li>
                <li>海运立方只按照尺寸计算运费</li>
                <li>海运立方 1m³ 超过 500kg 则为重货</li>
                <li>大批量重货运输过程中，经常需要需要分批完成派送，以确保车辆不超载</li>
              </ul>
               <h3>六、例子</h3>
               <p></p>
               <p>假设 1m³ 的货物重量 100kg:</p>
               <p></p>
               <div><u>实际重量：100kg</u></div>
               <div><u>实际重量：100kg</u></div>
               <p></p>
               <ol>
                 <li>
                   <div>
                     <small class="text-info">免抛：只按实际重量计费</small>
                   </div>
                   <div>
                     实际重量 = <strong class="text-success">100kg</strong>
                   </div>
                 </li>
                 <li>
                   <div>
                     <small class="text-info">半抛：(实际重量 + 体积重量) ÷ 2</small>
                   </div>
                   <div>
                     (166.67kg + 100kg) ÷ 2 = <strong class="text-success">133.34kg</strong>
                   </div>
                 </li>
                 <li>
                   <div>
                     <small class="text-info">全抛：实际重量与体积重量取大计费</small>
                   </div>
                   <div>
                     166.67kg > 100kg = <strong class="text-success">166.67kg</strong>
                   </div>
                 </li>
               </ol>
               <h3>七、注释</h3>
                <ul>
                  <li><strong>“抛货” </strong> <sup>&nbsp;&nbsp;bulky cargo</sup></li>
                  <li><strong>“重货” </strong><sup>&nbsp;&nbsp;heavy cargo</sup></li>
                  <li><strong>“体积重量” </strong><sup>&nbsp;&nbsp;Dimensional Weight</sup></li>
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
          ul{
            padding-left: 20px;
            list-style: disc;
            margin-top: 16px;
            li{
              margin: 6px 0;
              line-height: 20px;
            }
          }
          ol{
            padding-left: 20px;
            list-style: decimal;
            margin-top: 16px;
            li{
              margin: 6px 0;
              line-height: 20px;
            }
          }
          a{
            color: #007fff;
            cursor: pointer;
            text-decoration: underline;
          }
				}
    }
  @media screen and (max-width: 768px) {
    .main{
      padding: 12px;
      .content{
        
      }
    }
  }
</style>