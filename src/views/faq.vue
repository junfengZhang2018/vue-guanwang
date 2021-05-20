<template>
   <div class='faq'>
      <div class="subhead-right">
        <a @click.prevent="" class="breadBtn breadBtn-primary">
            <span>联系客服</span>
        </a>
      </div>
      <div class="main">
        <h1 class="article-title">常见问题</h1>
        <div class="content">
          <h3>一、包裹与运单</h3>
          <ul class="faqs">
            <li :class="item.flog?'active':''" v-for="(item,index) in faqs1" :key="index" @click="readDetails(index,'faqs1')">
              <div class="top">{{item.top}}</div>
              <div class="bot" v-html="item.bot"></div>
            </li>
          </ul>
          <h3>二、付款与账单</h3>
          <ul class="faqs">
            <li :class="item.flog?'active':''" v-for="(item,index) in faqs2" :key="index" @click="readDetails(index,'faqs2')">
              <div class="top">{{item.top}}</div>
              <div class="bot" v-html="item.bot"></div>
            </li>
          </ul>
          <h3>三、货物运输</h3>
          <ul class="faqs">
            <li :class="item.flog?'active':''" v-for="(item,index) in faqs3" :key="index" @click="readDetails(index,'faqs3')">
              <div class="top">{{item.top}}</div>
              <div class="bot" v-html="item.bot"></div>
            </li>
          </ul>
          <h3>四、售后服务</h3>
          <ul class="faqs">
            <li :class="item.flog?'active':''" v-for="(item,index) in faqs4" :key="index" @click="readDetails(index,'faqs4')">
              <div class="top">{{item.top}}</div>
              <div class="bot" v-html="item.bot"></div>
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
              faqs1:[{
                  top:'包裹入库后会提供重量吗？',
                  bot:'包裹入库后，系统会显示包裹的重量和入库时间，我们会以电邮或微信给您发送通知。',
                  flog:false
                },{
                  top:'如何分辨普货和敏感货商品？',
                  bot:'空运普货是（服饰，鞋包，家具，母婴用品，运动用品，无电池类电器，无磁铁货品，书籍）的商品，敏感货则是（仿牌／正版商品，正品玩偶，高价值商品，珠宝，液体，粉状物，药，光碟，视频，正版商品，电磁类，电器）的商品。<br><div>海运的普货和敏感与空运有些不同，<a href="">点击请查详情</a></div>',
                  flog:false
                },{
                  top:'包裹入库后会提供重量吗？',
                  bot:'只需添加正确的包裹快递号，即可查询所有中国的快递信息。无需使用淘宝APP或其他网址查看。',
                  flog:false
                },{
                  top:'包裹入库后会提供重量吗？',
                  bot:'如果遇到这类情况，请 <a href="">联系客服</a>，客服将为您建议合适的对应货品种类。',
                  flog:false
                }],
              faqs2:[{
                  top:'使用微信支付、支付宝需要多久才能到账？',
                  bot:'微信支付、支付宝即时到账，无需等待。',
                  flog:false
                },{
                  top:'使用淘宝付款充值需要多久才能到账？',
                  bot:'淘宝付款充值即时到账，无需等待。',
                  flog:false
                },{
                  top:'没有微信支付、支付宝怎么办？',
                  bot:'MuluPost 提供好友代付功能，中国淘宝代购服务，只需点击好友代付，将付款链接或者二维码发送给好友付款即可完成订单支付或余额充值。',
                  flog:false
                }],
                faqs3:[{
                  top:'付款运费后多久会收到包裹？',
                  bot:'<div>空运：发货后西马 3-4 天工作日，东马 5-7 天工作日，新加坡 3-5 工作日即可送达。</div><div>海运：发货后西马 15-20 天工作日，东马 18-25 天工作日，新加坡 10-15 工作日即可送达。</div><div>提示：以上为正常情况下的时效，如果遇到气候问题，航班延误，或者海关严查等第三方因素，送货日期会有所推迟。</div>',
                  flog:false
                },{
                  top:'运费付款后什么时候发货？',
                  bot:'<div>每天下午六点发货，建议您在下午三点前提交运单，五点前支付代运费用。</div><div>如果下午五点后支付代运费用，则需付款后第二天发货。</div><div>如果货物十分紧急，请 <a href="">联系客服</a>，客服将为您安排预先发货。 </div>',
                  flog:false
                },{
                  top:'包裹中含有敏感物品，却使用普货渠道发货，怎么办？',
                  bot:'如果在清关中发现敏感物品使用普货渠道发货，清关时可能导致延误，抽查，充公等问题。如果包裹被退回，需自行支付二次发货的运费后转敏感渠道发货，则第一次的运费将被视为充公处理。',
                  flog:false
                },{
                  top:'海运小包和海运立方的差别是什么？',
                  bot:'海运小包适合 25KG 以下的货品，使用重量作为计费单位。海运立方则适合大型的货品并且价格上更加优惠，使用体积作为计费单位。海运小包将由本地的快递进行派送，海运立方则是本地的物流公司派送。',
                  flog:false
                },{
                  top:'海运需要包税吗？',
                  bot:'海运费用已包税包清关，无敏感费。',
                  flog:false
                },{
                  top:'什么是抛重，免抛，半抛？',
                  bot:'<div>抛重是包裹的体积重量大过实际重量时，运费会根据体积重进行计费。</div><div>免抛是不管包裹的体积重量是否大过实际重量，运费只会根据实际重量进行计费。</div><div>半抛是当体积重量大过实际重量时，运费根据体积重量加实际重量除于 2 后获得的数为重量进行计费。</div>',
                  flog:false
                },{
                  top:'什么是体积重量和实际重量？',
                  bot:'实际重量是根据电子称所测量出的货品实际重量，而体积重量是货品打包后的（长 x 宽 x 高 / 6000）后得到数目为体积重量。',
                  flog:false
                }],
                faqs4:[{
                  top:'包裹签收时发现破损怎么办？',
                  bot:'如果包裹签收时发现破损，请拒绝签收，“拍照商品” 和 “称重商品”，并<a href="">联系客服</a>，我们会为您展开调查。',
                  flog:false
                },{
                  top:'包裹签收后发现货品缺少怎么办？',
                  bot:'如果包裹签收后发现货品缺少，请<a href="">联系客服</a>，“拍照商品” 和 “称重商品”，客服将为用户进行调查。',
                  flog:false
                }],
            };
        },
        //监听属性 类似于data概念
        computed: {},
        //监控data中的数据变化
        watch: {},
        //方法集合
        methods: {
        readDetails(index,type){
          switch(type) {
					  case 'faqs1':
					        this.faqs1[index].flog = !this.faqs1[index].flog;
					        break;
					  case 'faqs2':
					         this.faqs2[index].flog = !this.faqs2[index].flog;
					        break;
						case 'faqs3':
								   this.faqs3[index].flog = !this.faqs3[index].flog;
							 break;
						case 'faqs4':
                   this.faqs4[index].flog = !this.faqs4[index].flog;
							 break;
					  default:
					} 
        },
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
    width: 100%;
    background-color: #fff;
    padding: 14px;
    line-height: 1.625;
    box-sizing: border-box;
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
    .content{
      >p{
        margin-top: 16px;
      }
      .link,/deep/a{
        color: #007fff;
        cursor: pointer;
        text-decoration: underline;
      }
      ul{
        padding-left: 20px;
        list-style: disc;
        margin-top: 16px;
        li{
          margin: 6px 0;
          line-height: 20px;
          .top{
            color: #586C94;
            display: inline-block;
            cursor: pointer;
          }
          .bot{
            display: none;
            font-size: 14px;
            line-height: 20px;
            margin: 12px 0 20px;
          }
        }
        li.active .bot{
          display: block;
        }
      }
    }
  }
</style>