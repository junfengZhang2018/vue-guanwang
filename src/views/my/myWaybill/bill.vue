<template>
   <div class='bill'>
      <div class="subhead-right">
          <a @click.prevent="$router.push('/my/wallet/deposit')" class="breadBtn breadBtn-success">
              <div class="icon icon-balance"></div>
              <span>轨迹追踪</span>
          </a>
      </div>
      <div class="main">
        <div class="content">
            <div class="panel billInfo">
                <div class="title sticky-top">
                    <div class="text-bold"><img src="" alt="">{{details.status}}<span class="mglr5">&nbsp;&nbsp;·&nbsp;&nbsp;</span> <span class="blueC">{{details.id}}</span> </div>
                </div>
                <div class="wraper">
                    <div class="tab-cel">
                        <span>首</span>
                        <span>￥16</span>
                        <span>x1</span>
                        <span>16.00</span>
                    </div>
                    <div class="tab-cel">
                        <span>续</span>
                        <span>￥7</span>
                        <span>x 8</span>
                        <span>56.00</span>
                    </div>
                    <div class="tab-cel total">
                        <span>合计</span>
                        <span>￥72.00</span>
                    </div>
                </div>
            </div>
             <div class="panel payment">
                <div class="title sticky-top">
                    <span class="text-bold">付款信息</span>
                </div>
                <div class="wraper">
                    <div class="tab-cel">
                        <span>付款运单</span>
                        <span>14 Jun 2021</span>
                        <span>￥72.00</span>
                    </div>
                    <div class="tab-cel total">
                        <span>合计</span>
                        <span>￥72.00</span>
                    </div>
                </div>
            </div>
            <div class="panel waybill">
                <div class="wraper">
                <div class="row">
                    <div class="label">运输方式：</div>
                    <div class="value">{{details.receive_region}} - {{details.freight_type}} - {{details.channel_company}}</div>
                </div>
                <div class="row">
                    <div class="label">收件信息：</div>
                    <div class="value">{{details.receive_name}}<span class="mglr5">&nbsp;&nbsp;·&nbsp;&nbsp;</span>{{details.receive_phone}}</div>
                </div>
                <div class="row">
                    <div class="label">集运包裹：</div>
                    <div class="value">2个</div>
                </div>
                <div class="row">
                    <div class="label">商品价值：</div>
                    <div class="value">¥{{details.goods_price}}</div>
                </div>
            
                </div>
            </div>
        </div>
      </div>
   </div>
</template>
<script>
   // import 《组件名称》 from '《组件路径》';
    import TabNav from '@/components/TabNav';
    import Default from '@/components/default';
    export default {
        components: {TabNav,Default},
        data() {
        //这里存放数据
            return {
              hasBill:true,
              details:{},
              remark:''
            };
        },
        created(){
          let me = this;
          let _data = me.$route.query
          console.log('_data',_data)
          if(JSON.stringify(_data) != "{}"){
            me.details = _data.details
            console.log(me.details)
          }else{
              me.$router.push('/my/myWaybill')
          }
        },
        methods:{
           
        }
    }
</script>
<style lang='less' scoped>
    .main{
      .mglr5{
        margin:0 5px;
      }
      .text-bold{
        font-weight: bold;
      }
      .panel{
          width: 100%;
          height: auto;
          background-color: #fff;
          .title{
            height: 40px;
            padding: 0 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #ddd;
            font-size: 16px;
            .blueC{
              color: #007fff
            }
          }
          .sticky-top{
            position: sticky;
            z-index: 3;
            top: 0px;
            background-color: rgba(255, 255, 255, 0.8);
            -webkit-backdrop-filter: blur(2px);
            backdrop-filter: blur(2px);
          }
          .wraper{
            padding: 8px 12px;
            .row{
              display: flex;
              align-items: center;
              font-size: 14px;
              line-height: 22px;
              .label{
                color: #666;
                white-space: nowrap;
                word-wrap: normal;
              }
            }
          }
          .panel-ft{
            display: flex;
            align-items: center;
            padding: 8px 12px;
            border-top: 1px solid #eeeeee;
            >span{
              margin-right:10px;
            }
            .btn-sm{
              font-size: 14px;
              line-height: 18px;
              padding: 3px 6px;
            }
            .btn-success-fill{
              color: #fff;
              background-color: #1ea11c;
              border: 1px solid #059603;
            }
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
              color: #fff;
              background-color: #198cff;
              border: 1px solid #007fff;
              
            }
          }
      }
      .panel.billInfo,.panel.payment{
        .wraper{
          .tab-cel{
            width: 180px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            margin-bottom: 6px;
            span{
              display: inline-block;
              min-width: 40px;
            }
          }
          .total{
            border-top: 1px dashed #ccc;
            padding-top:10px;
            margin-top: 10px;
          }
        }
      }
      .panel.payment{
          .wraper{
          .tab-cel{
            width: 230px;
          }
        }
      }
      .panel.packInfo{
        .wraper{
          padding: 0;
        }
        .item{
          width: auto;
          height: auto;
          border-bottom: 1px dashed #ddd;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding:12px 10px;
          box-sizing: border-box;
        }
        .item:last-child{
          border-bottom:none;
        }
        .checkbox{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;
          span{
            color: #007fff;
            margin-right: 10px;
          }
        }
        .box{
          flex: 1;
          .packNum{
            font-size: 16px;
            line-height: 20px;
            margin-bottom: 2px;
            color: #000;
          }
          .info{
            .p-cel{
              font-size: 14px;
              line-height: 20px;
              color: #333;
            }
            .name{
              line-height: 24px;
            }
            .params{
                  opacity: 0.7;
            }
          }
          .text-ellipsis {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
   @media screen and (max-width: 768px) {
    .main{
      .panel-ft{
         border-top: none;
      }
    }
  }
</style>