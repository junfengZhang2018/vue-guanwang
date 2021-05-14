<template>
   <div class='cargoTransportAdvice'>
       <div class="subhead-right">
			<a @click.prevent="" class="breadBtn breadBtn-success">
				<span>帮助中心</span>
			</a>
        </div>
        <div class="main">
          <h1 class="article-title">新加坡、马来西亚代运渠道建议</h1>
          <div class="summary">
            <div class="text-success">MuluPost 提供以下货运选择建议，您也可以根据货运需求选择最合适的运输渠道</div>
          </div>
          <div class="content">
              <h3>一、空运运输 - 快速送达</h3>
              <p>如果货物需要在短时间内收到，建议使用空运。空运可以预计在 3-4 天的工作天将包裹从中国送到您的的收货地址。</p>
              <p>空运渠道分为 <strong>“普货空运”</strong> 与 <strong>“敏感空运”</strong> ，敏感空运价格稍贵一些，运输过程请正确选择货运渠道。<a href="">可点击查看普货与敏感货物识别</a> 如不确定货物类型请 <a href="">联系客服</a></p>
              <p>空运渠道有 10~30kg 的免抛计价重量，绝大部分包裹都只按照实际重量计算运费，忽略体积重量。</p>
              <h3>二、海运运输 - 经济划算</h3>
              <p>海运可以在 15-20 天的工作日将包裹从中国广州送到您的的收货地址。</p>
              <p>海运渠道分为 <strong>“海运小包”</strong> 与 <strong>“海运立方”</strong> 提交运输可任意选择海运渠道提交运输，仓库操作过程会依据包裹的重量以及尺寸为您选择最划算的海运渠道进行运输。</p>
              <p>两者的时效一致，区别在于海运小包为以重量为计费单位(RMB/kg)，海运立方以体积为计费单位(RMB/cbm)。</p>
              <p>“海运立方” 适合运输大件货物，只按照测量体积计费，忽略重量。</p>
              <p>“海运小包” 计费为全抛计费，按照 “实际重量” 与包裹尺寸计算 “体积重量” 取大者为计费重量。</p>
              <p>“体积重量” 的计算公式为 长cm×宽cm×高cm ÷ 6000。</p>
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
			.text-info{
				color: #586C94;
			}
      .text-success{
        color: #059603;
      }
		}
		.content{
			text-align: justify;
			>p{
				margin-top: 16px;
			}
			
			a{
			  color: #007fff;
				cursor: pointer;
				text-decoration: underline;
			}
		}
    }
</style>