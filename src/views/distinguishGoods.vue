<template>
   <div class='warehouseAddress'>
       <div class="subhead-right">
					<a @click.prevent="" class="breadBtn breadBtn-success">
						<span>帮助中心</span>
					</a>
        </div>
        <div class="main">
          <h1 class="article-title">敏感货与普货分辨</h1>
					<div class="summary">
						<div class="text-info">代运货物的种类分为两种：“普货” 和 “敏感货”</div>
					</div>
					<div class="content">
            <p>普货和敏感货是用来区分在中国代运出口到其他国家如马来西亚、新加坡等地区的检验标准。</p>
            <p>因此国际航空快递业将货物区分为三大类：即普货，监管级的敏感货，和违禁品。</p>
            <p>如果敏感货使用普货渠道代运，可能导致检验无法顺利通关发货。用户将可能延迟收货或需要缴付敏感渠道的费用差额才能发货。</p>
            <p class="">以下表格区分了 “空运渠道” 和 “海运渠道” 的普货、敏感货与禁运物品：</p>
            <table>
              <thead>
                <tr><th colspan="3">
                  <div class="flex"><div class="flex-item">空运服务</div></div>  
                </th></tr>
              </thead>
              <tbody>
                <tr><td class="text-info text-center">普货代运<td>服饰，鞋包，家具，母婴用品，运动用品，无磁铁货品，书籍<br>一般上非（电池类，液体类，粉状类，品牌类，磁铁类，喷雾类）都可以归纳为 “普货”。</td></tr>
                <tr><td class="text-info text-center">敏感货代运</td><td><div>仿牌／正版商品，正品玩偶，高价值商品，珠宝，液体，粉状物，药，光碟，视频，正版商品，电磁类，电器，利器</div><div class="marginTop6" ><a href="">查看敏感货物详细说明</a></div></td></tr>
                <tr><td class="text-info text-center">禁运物品</td><td><div>烟草，武器，动物，货币，易燃物，高压气体 (喷雾)，危险物品，酒类，毒品</div><div class="marginTop6" ><a href="">查看敏感货物详细说明</a></div></td></tr>
              </tbody>
            </table>
             <table>
              <thead>
                <tr><th colspan="3">
                  <div class="flex"><div class="flex-item">海运服务</div></div>  
                </th></tr>
              </thead>
              <tbody>
                <tr><td class="text-success text-center" colspan="2">海运无须分辨普货与敏感货</td></tr>
                <tr><td class="text-info text-center">禁运物品</td><td><div>烟草，武器，动物，货币，易燃物，高压气体 (喷雾)，危险物品，酒类，毒品</div><div class="marginTop6" ><a href="">查看敏感货物详细说明</a></div></td></tr>
              </tbody>
            </table>
            <p class="text-warning">如无法分辨货物类型，可联系 MuluPost 货运客服，我们将为你提供协助</p>
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
              font-size: 14px;
              line-height: 20px;
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
         a{
					  color: #007fff;
						cursor: pointer;
						text-decoration: underline;
					}
          .marginTop6{
            margin-top: 6px;
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
            th,td{
              padding: 10px 6px;
              word-break: break-all;
            }
        }
      }
    }
  }
</style>