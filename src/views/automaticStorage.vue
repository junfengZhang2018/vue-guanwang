<template>
   <div class='automaticStorage'>
       <div class="subhead-right">
			<a @click.prevent="" class="breadBtn breadBtn-success">
				<span>帮助中心</span>
			</a>
        </div>
        <div class="main">
          <h1 class="article-title">包裹免填单全自动入库</h1>
			<div class="summary">
				<div class="text-info">从此告别手动填单机械操作</div>
			</div>
			<div class="content">
				<h3>代运全自动入库可节省录单时间，减少出错率，同时极大提高包裹代运效率。</h3>
				<h3>一、实现原理</h3>
				<p>仓库系统会为每一位注册会员分配唯一的收货地址信息、即收货详细地址中包含系统分配的 6 位会员ID。</p>
				<p>只需将地址填写到购物平台仓储系统即可在包裹送达仓库后系统将自动检测出包裹的所属用户，并自动添加包裹到对应账户。</p>
				<p>系统除了添加包裹还将智能识别出包裹托寄物名称、计算重量与体积、分配最佳仓位、如您需要包裹送达仓库后收到及时通知请绑定微信并关注 MuluPost 公众号。</p>
				<p>绑定微信请 <a class="login" href="">登录/注册</a>  后访问个人中心操作。 </p>
				<p>关注微信公众号请在微信中搜索 MuluPost 。</p>
				<h3>二、自动入库优势</h3>
				<ol>
					<li>避免手动操作，误填单号；</li>
					<li>分配最佳仓位提高拣货及出货效率；</li>
					<li>商家分多票发货可不漏单自动添加包裹，避免遗漏货物在仓库；</li>
					<li>节省大量的填写单号时间，告别手动填单枯燥乏味的操作；</li>
				</ol>
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
			.login{
			  color: #007fff;
				cursor: pointer;
				text-decoration: underline;
			}
		}
    }
</style>