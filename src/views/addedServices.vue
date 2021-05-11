<template>
   <div class='automaticStorage'>
       <div class="subhead-right">
					<a @click.prevent="" class="breadBtn breadBtn-success">
						<span>帮助中心</span>
					</a>
        </div>
        <div class="main">
          <h1 class="article-title">代运增值服务</h1>
					<div class="summary">
						<div class="text-success">MuluPost 除了提供基础运输服务，还提供人性化的增值服务，让运输更有保障，以下是我们提供的代运增值服务</div>
					</div>
					<div class="content">
            
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
        .text-gray{
          color: #666666;
          font-size: 13px;
        }
				.content{
					text-align: justify;
					>p{
						margin-top: 16px;
					}
				}
    }
</style>