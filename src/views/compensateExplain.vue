<template>
   <div class='compensateExplain'>
       <div class="subhead-right">
          <a @click.prevent="" class="breadBtn breadBtn-success">
            <span>帮助中心</span>
          </a>
        </div>
        <div class="main">
          <h1 class="article-title">货运赔偿说明</h1>
          <div class="content">
            <h3>一、空运赔偿</h3>
            <p>空运货物在转运过程中丢失的，根据国际快递赔偿惯例，按丢件货物运费的 5 倍进行赔偿，最高不超过 100 美金。</p>
            <h3>二、海运</h3>
            <p>海运在转运过程遗失，按丢件运费的 3 倍理赔，最高不超过 500 美金。</p>
            <h3>三、运输保险</h3>
            <p>高价值商品请联系客服购买保险，保费为物品 3%，详情 <a href="">咨询客服。</a></p>
            <p class="text-success fweight-500">价值高的货物建议购买运输保险，保费为：保额 x 3%（保额 = 货物价格）。</p>
            <p class="text-danger fweight-500">易碎品请妥善包装，破损不予赔偿。</p>
            <h3>四、赔偿细则</h3>
            <p>根据航司赔偿条例，运费是不作为赔偿对象，即运费不赔偿。</p>
            <p>如果出现遗失的情况，收到包裹 24 小时内联系我司相关业务，我司需要最长 15 天的工作日对包裹进行调查，由于经过多渠道协商调查，国际航空公司，清关部门，派送公司等，请耐心等待我们调查结果。一旦确认遗失，我司会立即处理和申请赔偿，申请赔偿需要 3 天的时间，财务部门会在每个周五处理赔偿和转账赔偿数额给申请人。</p>
            <p>其他运输注意事项：如客户虚报货物与价值，导致被海关充公或者罚款，此费用由客户自行承担。</p>
            <p>如客户敏感货错选普货空运渠道而导致包裹被退回，需补敏感费即可重出，同时此情况也有可能货物被海关没收则自行负责。</p>
            <p>如客户隐瞒虚报托运禁运品的，如毒品、易燃易爆等，一切法律责任由客户承担。</p>
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
    .text-success{
      color: #059603;
    }
    .text-danger {
      color: #ea3838;
    }
    .fweight-500{
      font-weight: 500
    }
		.content{
			text-align: justify;
			>p{
				margin-top: 16px;
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