<template>
   <div class='aboutUs'>
       <div class="subhead-right">
					<a @click.prevent="" class="breadBtn breadBtn-success">
						<span>帮助中心</span>
					</a>
        </div>
        <div class="main">
          <h1 class="article-title">关于我们</h1>
					<div class="summary">
						<div class="text-info">智慧物流，更专业、更安全、更可靠的代运服务</div>
					</div>
					<div class="content">
            <p>MuluPost 位于中国广东，致力于打造极致体验的马来西亚中国代运服务与新加坡中国代运服务的国际集运公司，在国际运输的基础上我们为客户提供一站式服务解决方案。多年来我们持续创新，不断铸造高品质服务体验，为客户成功提供坚实有力的支持。</p>
            <p>我们的服务范围包含仓储物流、空运与海运等增值服务，从清关到快递派送，无需担心一切繁琐的过程。智能化物流系统实时追踪包裹位置信息，精准预测包裹送达时间，安全便捷准时收货，高效快速完成跨境物流派送。</p>
            <p>您可以将中国任意在线商城 <small>（淘宝，天猫，京东等）</small> 选购您的商品，并邮寄到我们的仓库。我们将负责保管您的商品并安全的邮寄到您的手中。您可以选择任意落地配送公司<small>（GDEX，PosLaju，SkyNet，Airpak，DHL，ABX，Kangaroo等）</small> 为您派送。在中国，我们位于广州的 Mulu 仓库将进行操作、配送并妥善管理您的包裹。</p>
            <table>
              <thead>
                <tr><th colspan="3">
                  <div class="flex"><div class="flex-item">联系方式</div></div>  
                </th></tr>
              </thead>
              <tbody>
                <tr><td class="text-info text-center">公司全称</td><td>TuoYi Technology Co., Ltd</td></tr>
                <tr><td class="text-info text-center">公司地址</td><td>广东省深圳市福田区兴华大厦东栋十层</td></tr>
                <tr><td class="text-info text-center">在线客服</td><td><span class="link">立即联系</span></td></tr>
                <tr>
                  <td class="text-info text-center">电邮地址</td><td>
                    <div><span class="text-info">商务合作：</span><a href="">business@mulupost.com</a></div>
                    <div><span class="text-info">投诉建议：</span><a href="">complaint@mulupost.com</a></div>
                  </td>
                </tr>
              </tbody>
            </table>
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
          .link,a{
            color: #007fff;
            cursor: pointer;
            text-decoration: underline;
          }
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
      }
    }
  }
</style>