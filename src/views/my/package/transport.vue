<template>
   <div class='transport'>
      <div class="subhead-right">
        <!-- <a @click.prevent="$router.push('/my/package/addPackage')" class="breadBtn breadBtn-primary">
            <span>添加包裹</span>
        </a> -->
      </div>
      <div class="main">
        <div class="colorTips colorTips-warning">
          <div class="colorTips-title">请复制文本粘贴收货信息</div>
          <div class="colorTips-content">尽量避免手动输入拼写错误</div>
        </div>
        <div class="content">
           <div class="order-wraper panel" >
              <div class="item" >
                <div class="checkbox">
                  <span>#1</span>
                </div>
                <div class="warper">
                  <div class="title">2222</div>
                  <div class="info">
                    <div class="left">
                        <div class="row">
                          22222
                        </div>
                        <div class="row red">
                          未入库
                        </div>
                    </div>
                  </div>
                 </div>
              </div>
            </div>
            <div class="panel recAdress" >
              <div class="title">
                <span class="text-bold">收货地址(1)</span>
                <span class="primary-button">添加收货地址</span>
              </div>
              <div class="rec-wraper">
                <div class="item">
                  <div class="radioBox">
                    <img class="radioImg" src="" alt="">
                  </div>
                  <div class="row-wraper">
                    <div class="text-p">Weasda-15454</div>
                    <div class="text-p text-bold">12(13025552)</div>
                    <div class="text-p">text</div>
                  </div>
                </div>
              </div>
            </div>    
            <div class="panel type" >
              <div class="title">
                <span class="text-bold">运输方式</span>
                <span class="text-success unline text-bold">普货与敏感货</span>
              </div>
              <div class="type-wraper">
                <div class="item">
                  <div class="radioBox">
                    <img class="radioImg" src="" alt="">
                  </div>
                  <div class="row-wraper">
                    <div class="text-bold text-p">1.空运普货</div>
                    <div class="text-p colGray">快速空运非敏感货物</div>
                  </div>
                </div>
                <div class="item">
                  <div class="radioBox">
                    <img class="radioImg" src="" alt="">
                  </div>
                  <div class="row-wraper">
                    <div class="text-bold text-p ">2.空运敏感</div>
                    <div class="text-p colGray">敏感商品如食物、电子产品、化妆品等</div>
                  </div>
                </div>
                <div class="item">
                  <div class="radioBox">
                    <img class="radioImg" src="" alt="">
                  </div>
                  <div class="row-wraper">
                    <div class="text-bold text-p ">3.海运运输</div>
                    <div class="text-p colGray">仓库会根据重量及尺寸更换划算的“海运小包”或“海运大货”渠道</div>
                  </div>
                </div>
              </div>
            </div>  
            <div class="panel company" >
              <div class="title">
                <span class="text-bold">海运公司</span>
              </div>
              <div class="company-wraper">
                请先选择“收货地址”，“运输方式”
              </div>
            </div> 
             <div class="panel goodsPrice" >
              <div class="title">
                <span class="text-bold">商品价格 RMB(必填)</span>
              </div>
              <div class="goodsPrice-wraper">
                <el-input class="inputStyle" v-model="goodsPrice" placeholder=" 运输商品购买花费人民币价格，大致范围"></el-input>
              </div>
            </div> 
            <div class="panel remark" >
              <div class="title">
                <span class="text-bold">操作留言(选填)</span>
              </div>
              <div class="remark-wraper">
                <el-input
                  type="textarea"
                  :autosize="{ minRows:3, maxRows: 4}"
                  placeholder="非必填，可留言告知仓库包装需求"
                  v-model="remark"
                  resize="none" 
                  >
                  </el-input>
                  <div class="bottom-operate">
                     <div class="checkbox">
                      <img class="checkImg" src="../../../assets/images/checkboxG.png"  alt="">
                    </div>
                    <div class="operate-c">
                      <div class="text-p">包装完成后，自动扣款并及时发货</div>
                      <div class="text-success text-p ">需要钱包中有足够支付运单的余额</div>
                    </div>
                  </div>
              </div>
            </div> 
        </div>
      </div>
   </div>
</template>
<script>
   // import 《组件名称》 from '《组件路径》';
    import Default from '@/components/default';
    import {getMyOrders} from '@/api/index'
    export default {
        components: {Default},
        data() {
        //这里存放数据
            return {
                hasPackage:false,
                myOrders:[],
                form:{
                  address:0,
                  type:0,
                },
                remark:'',
                goodsPrice:''
                
            };
        },
        created(){
          this.getMyOrders()
        },
         //方法集合
        methods: {
            getMyOrders(){
              let me = this;
              getMyOrders().then(res =>{
                console.log(res)
                if(res.success&&res.obj.length>0){
                  me.myOrders = res.obj
                  me.hasPackage = true
                }
              })
            },
            // editAddress(item){
            //     let me = this;
            //     let _data = {
            //       type:'edit',
            //       items:item
            //     }
            //     me.$router.push({
            //       path: `/my/address/creatAddress/${JSON.stringify(_data)}`,
            //     })
            // }
        } 
    }
</script>
<style lang='less' scoped>
    .main{
      .content{
        .panel{
            width: 100%;
            height: auto;
            background-color: #fff;
            .radioImg,.checkImg{
              width: 20px;
              height: 20px;
              margin:5px 10px 5px 0 ;
            }
        }
        .order-wraper{
          .item{
            width: auto;
            height: auto;
            border-bottom: 1px dashed #ddd;
            display: flex;
            justify-content: center;
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
          .warper{
            flex: 1;
            height: auto;
            .title{
              width: 100%;
              font-size:16px;
              font-weight: bold;
            }
            .info{
              width: 100%;
              height: auto;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .left{
                flex: 1;
                  .row{
                    padding:4px 0;
                    font-size: 13px;
                    color: #999;
                  }
                  .row.red{
                    color: red;
                  }
              }
            }
          }
        }
        .recAdress,.company,.type,.goodsPrice,.remark{
           .text-bold{
              font-weight: bold;
            }
           .title{
            height: 40px;
            padding: 0 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #ddd;
            font-size: 16px;
            .primary-button{
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 4px;
              text-align: center;
              line-height: 24px;
              font-size: 16px;
              padding: 4px 16px;
              white-space: nowrap;
              background-color: #007fff;
              color: #fff;
            }
            .unline{
              text-decoration: underline;
            }
          }
          .rec-wraper,.type-wraper{
            padding:16px 10px;
            width: 100%;
            box-sizing: border-box;
            font-size: 15px;
            .item{
              width: 100%;
              height: auto;
              box-sizing: border-box;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              .row-wraper{
                flex:1;
                .text-p{
                  margin: 5px 0;
                }
                .colGray{
                  color: #666;
                }
              }
            }
          }
          .type-wraper{
            .item{
              margin: 5px 0;
            }
          }
          .company-wraper{
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            color:#d46419 ;
          }
          .goodsPrice-wraper{
             width: 100%;
            height: auto;
            box-sizing: border-box;
          }
          .remark-wraper{
            width: 100%;
            height: auto;
            box-sizing: border-box;
            .bottom-operate{
              display: flex;
              justify-content: flex-start;
              align-items: center;
              padding: 10px;
              box-sizing: border-box;
               .text-p{
                 font-size: 14px;
                margin: 3px 0;
                font-weight: 600;
              }
            }
          }
        }
        
        .addPackage{
          width: 100%;
          text-align: center;
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
            color: #fff;
            background-color: #198cff;
            border: 1px solid #007fff;
            
          }
        }
      }
        
    }
  
</style>