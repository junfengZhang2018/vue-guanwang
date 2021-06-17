<template>
   <div class='warehouseAddress'>
       <div class="subhead-right">
					<a @click.prevent="" class="breadBtn breadBtn-success">
						<span>帮助中心</span>
					</a>
        </div>
        <div class="main">
          <h1 class="article-title">BosuPost 仓库地址</h1>
					<div class="summary">
						<div class="text-info">在使用代运服务须将收货地址设置为 BosuPost 仓库地址，包裹才能有效的送往我们的仓库。</div>
					</div>
					<div class="content">
            <table>
              <thead>
                <tr><th colspan="3">
                  <div class="flex"><div class="flex-item">广州仓库地址</div></div>  
                </th></tr>
              </thead>
              <tbody>
                <tr><td class="text-info text-center"><span class="hidden-xs-only">收件</span>姓名</td><td>MF</td></tr>
                <tr><td class="text-info text-center"><span class="hidden-xs-only">联系</span>电话</td><td>1233652652</td></tr>
                <tr><td class="text-info text-center"><span class="hidden-xs-only">所在</span>地区</td><td>广东省/广州市/白云区/白云湖街道</td></tr>
                <tr><td class="text-info text-center"><span class="hidden-xs-only">详细</span>地址</td><td> <a class="login" href="">登录/注册</a> 获取专属仓库地址</td></tr>
                <tr><td class="text-info text-center">邮<span class="hidden-xs-only">政</span>编<span class="hidden-xs-only">码</span></td><td> 510450</td></tr>
              </tbody>
            </table>
						<h3>一、注册 BosuPost 会员，获取完善的仓库地址信息</h3>
						<p>收货人地址中包含会员ID，用于确认包裹归属，完成自动入库。</p>
						<h3>二、包裹在送达仓库后自动入库</h3>
            <p>仓库收到包裹后，会识别出收货地址中的会员ID，智能分拣系统将自动为您创建包裹单号及商品信息，无须添加包裹即可提交代运运单。</p>
            <h3>
              <div>三、添加仓库地址示例：</div>
              <div><small class="text-success">请参考下图</small> </div>
              <div><small class="text-gray">不要求填写邮编的购物平台，邮编则可忽略不写</small></div>
            </h3>
            <div class="imgBox">
              <img src="" alt="">
            </div>
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
        .text-info{
          color: #586C94;
        }
				.content{
					text-align: justify;
          table{
            margin-top: 16px;
            width: 100%;
            border-collapse: collapse;
            border-spacing: 0;
            border: none;
            line-height: 22px;
            thead{
              tr{
                background-color: #fafcff;
              }
            }
            th,td{ 
              padding: 10px;
              vertical-align: middle;
              border: 1px solid #eeeeee;
            }
            th{
              text-align: left;
              font-weight: 500;
            }
            .text-info{
              width:80px;
              text-align: center;
            }
          }
					>p{
						margin-top: 16px;
					}
					.text-success{
            color: #059603;
          }
          .text-gray{
            color: #666666;
            font-size: 13px;
          }
          .imgBox{
            margin-top: 16px;
            max-width: 320px;
            img{
              vertical-align: middle;
              max-width: 100%;
              font-size: 12px;
              color: #666666;
              border: 1px solid #f2f2f2;
            }
          }
         .login{
					  color: #007fff;
						cursor: pointer;
						text-decoration: underline;
					}
				}
    }
       // 首页响应式
  @media screen and (max-width: 768px) {
    .main{
      padding: 12px;
      .content{
        table{
           font-size: 14px;
           .text-info{
              width:48px;
              padding-left: 0;
              padding-right: 0;
            }
            th,td{
              padding: 10px 6px;
              word-break: break-all;
            }
        }
      }
    }
  }
</style>