<template>
   <div class='transport'>
      <div class="subhead-right">
        <!-- <a @click.prevent="$router.push('/my/package/addPackage')" class="breadBtn breadBtn-primary">
            <span>添加包裹</span>
        </a> -->
      </div>
      <div class="main">
        <div class="colorTips colorTips-warning">
          <div class="colorTips-title">非常时期配送时效提醒</div>
          <div class="colorTips-content">COVID-19疫情期间，“进出口清关”及“末端配送”均受到不同程度的影响，送达时效不稳定。</div>
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
                <span class="primary-button" @click="$router.push('/my/address/creatAddress')">添加收货地址</span>
              </div>
              <div class="rec-wraper">
                <div class="" v-if="myAddress.length<1">
                  请选择地址
                </div>
                <div class="address-box" v-else>
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
            </div>    
            <div class="panel type" >
              <div class="title">
                <span class="text-bold">运输方式</span>
                <span class="text-success unline text-bold">普货与敏感货</span>
              </div>
              <div class="type-wraper">
                <div class="item" v-for="(item,index) in typeList" :key="index">
                  <div class="radioBox">
                    <img class="radioImg"  :src="item.id==typeIndex?require('../../../assets/images/radioSelect.png'):require('../../../assets/images/radio.png')" alt="">
                  </div>
                  <div class="row-wraper">
                    <div class="text-bold text-p">{{item.name}}</div>
                    <div class="text-p colGray">{{item.tips}}</div>
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
                      <img class="checkImg" :src="blPayAuto?require('../../../assets/images/select.png'):require('../../../assets/images/checkboxG.png')"  alt="">
                    </div>
                    <div class="operate-c">
                      <div class="text-p">包装完成后，自动扣款并及时发货</div>
                      <div class="text-success text-p ">需要钱包中有足够支付运单的余额</div>
                    </div>
                  </div>
              </div>
            </div> 
            <div class="bot-button"><a class="button btn-primary-full" @click="submit"><img src="" alt="">确认提交运输</a></div>
            <div class="wraper-cks">
              <div class="checkbox">
                <img class="checkImg" :src="agree?require('../../../assets/images/select.png'):require('../../../assets/images/checkboxG.png')"  alt="">
              </div>
              <div>我已经阅读并同意 <span class="booking">《服务协议》</span></div>
            </div>
        </div>
      </div>
   </div>
</template>
<script>
   // import 《组件名称》 from '《组件路径》';
    import Default from '@/components/default';
    import {getMyOrders,queryMyAddress} from '@/api/index'
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
                goodsPrice:'',
                agree:false,
                typeList:[{
                  id:0,
                  name:'1.空运普货',
                  tips:'快速空运非敏感货物',
                  value:'空运普货'
                },
                {
                  id:1,
                  name:'2.空运敏感',
                  tips:'敏感商品如食物、电子产品、化妆品等',
                  value:'空运敏感'
                },
                {
                  id:2,
                  name:'3.海运运输',
                  tips:'仓库会根据重量及尺寸更换划算的“海运小包”或“海运大货”渠道',
                  value:'海运运输'
                }],
                typeIndex:0,
                myAddress:[],
                blPayAuto:false
            };
        },
        created(){
          this.getMyOrders()
        },
         //方法集合
        methods: {
           getMyAddress(){
              let me = this;
              queryMyAddress().then(res =>{
                console.log(res)
                if(res.success&&res.obj.length>0){
                  me.myAddress = res.obj
                  me.hasAddress = true
                }
              })
            },
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
            submit(){
              let me = this;
              let recData = me.myAddress.find(item=>{
                return item.checked
              });

              if(recData.name ==''){me.$message("请选择收件人");return;}
              if(me.zipCode ==''){me.$message("请输入邮政编码");return;}
              if(me.receiveName ==''){me.$message("请输入收件人姓名");return;}
              if(me.receivePhone ==''){me.$message("请输入收件人电话");return;}
              if(me.receiveAddress ==''){me.$message("请输入收货地址");return;}


            }
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
        .radioImg,.checkImg{
            width: 20px;
            height: 20px;
            margin:5px 10px 5px 0 ;
          }
        .panel{
            width: 100%;
            height: auto;
            background-color: #fff;
           
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
        .bot-button{
          width: 100%;
          display: flex;
          font-size: 15px;
          margin-top: 20px;
          .button{
          padding: 8px 12px;
          border-radius: 4px;
          }
        }
        .wraper-cks{
          display: flex;
          align-items: center;
          font-size: 15px;
          margin-top: 25px;
          .checkImg{
            margin:0 5px 0 0 ;
          }
          .booking{
            color:#198cff;
          }
        }
      }
        
    }
  
</style>