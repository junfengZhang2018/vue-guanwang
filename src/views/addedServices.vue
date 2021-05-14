<template>
   <div class='addedServices'>
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
            <ul class="list clearfix">
              <li v-for="(item, index) in servicesList" :key="index">
                <div class="wrap">
                  <div class="title">{{item.title}}</div>
                  <div class="icon"></div>
                  <div class="price" :class="item.priceStyle">{{item.price}}</div>
                  <div class="desc">{{item.desc}}</div>
                </div>
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
               servicesList:[{
                title:'空运拆外包装',
                desc:'空运可拆开包裹的外包装，以减轻整体的重量。',
                icon:'',
                price:'FREE / 免费',
                priceStyle:'text-success'
                },{
                title:'空运拆内包装',
                desc:'空运可拆开包裹的内外包装，以减轻整体的重量。',
                icon:'',
                price:'FREE / 免费',
                priceStyle:'text-success'
                },{
                title:'易碎标签',
                desc:'贴上易碎标签，避免包裹里的货品在运输途中破碎。',
                icon:'',
                price:'FREE / 免费',
                priceStyle:'text-success'
                },{
                title:'拍照验货',
                desc:'拆开包裹并拍照包裹里的商品，会提供2至5张照片。',
                icon:'',
                price:'¥5/件',
                priceStyle:'text-warning'
                },{
                title:'拍照验货',
                desc:'拆开包裹并拍照包裹里的商品，会提供2至5张照片。',
                icon:'',
                price:'¥5/件',
                priceStyle:'text-warning'
                },{
                title:'拍照验货',
                desc:'拆开包裹并拍照包裹里的商品，会提供2至5张照片。',
                icon:'',
                price:'¥5/件',
                priceStyle:'text-warning'
                }
              ],
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
            margin-top: 16px;
            text-align: center;
            li{
              float: left;
              width: 33.3333%;
              padding: 20px 0;
              margin: 6px 0;
              line-height: 20px;
              .wrap{
                width: 100%;
                height: 100%;
                .title{
                  color: #007fff;
                  font-size: 18px;
                  line-height: 24px;
                }
                .icon{
                  width: 64px;
                  height: 64px;
                  margin: 14px auto;
                  display: block;
                  border-radius: 4px;
                }
                .price{
                  font-size: 14px;
                  padding: 0 8px;
                  line-height: 20px;
                  overflow: hidden;
                  margin-bottom: 4px;
                }
                .desc{
                  color: #999999;
                  font-size: 14px;
                  padding: 0 8px;
                  line-height: 20px;
                  height: 60px;
                  overflow: hidden;
                }
              }
            }
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