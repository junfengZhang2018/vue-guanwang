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
              <div class="item" v-for="(item,index) in myOrders" :key="index">
                <div class="checkbox">
                  <span>#{{item.id}}</span>
                </div>
                <div class="warper">
                  <div class="title">{{item.bill_code}}</div>
                  <div class="info">
                    <div class="left">
                        <div class="row">
                          {{item.goods_name}}
                        </div>
                        <div class="row red">
                          {{item.status==0?'未入库':''}}
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
                  <div class="item" v-for="(item,index) in myAddress" :key="index" >
                    <div class="radioBox">
                      <img class="radioImg" @click.stop="selectAddress(item,index)"  :src="item.ck?require('../../../assets/images/radioSelect.png'):require('../../../assets/images/radio.png')" alt="">
                    </div>
                    <div class="row-wraper">
                      <div class="text-p">{{item.receive_name}} - {{ item.receive_phone}}</div>
                      <div class="text-p text-bold">{{item.reveive_address}}</div>
                      <div class="text-p">{{item.region}}（邮政编码:{{item.zip_code}}）</div>
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
                  <div class="radioBox"  @click="selectType(item,index)">
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
              <!-- <div class="company-wraper" >
                请先选择“收货地址”，“运输方式”
              </div> -->
              <div class="">
                <el-input class="inputStyle" v-model="company" placeholder="请输入公司名称~"></el-input>
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
                      <img class="checkImg" @click="selectBlPayAuto" :src="blPayAuto?require('../../../assets/images/select.png'):require('../../../assets/images/checkboxG.png')"  alt="">
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
                <img class="checkImg" @click="selectAgree"  :src="agree?require('../../../assets/images/select.png'):require('../../../assets/images/checkboxG.png')"  alt="">
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
    import {queryMyAddress,addMyBills} from '@/api/index'
    export default {
        components: {Default},
        data() {
        //这里存放数据
            return {
                hasPackage:false,
                myOrders:[],
                remark:'',
                goodsPrice:'',
                company:'',
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
          let me = this;
          let _data = me.$route.query
          if(JSON.stringify(_data) != "{}"){
            me.myOrders = _data.packageList
          }else{
             me.$router.push('/my/package')
          }
          me.getMyAddress()
        },
         //方法集合
        methods: {
           getMyAddress(){
              let me = this;
              queryMyAddress().then(res =>{
                console.log(res)
                if(res.success&&res.obj.length>0){
                  res.obj.forEach(item =>{
                    item.ck = false
                  })
                  me.myAddress = res.obj;
                  me.myAddress[0].ck = true;
                  me.hasAddress = true;
                }
              })
            },
            selectType(item,index){
              let me = this;
              me.typeIndex = index
            },
            selectAddress(item,index){
              let me = this;
              me.myAddress.forEach(item =>{
                item.ck = false
              })
              me.myAddress[index].ck = true;
            },
            selectBlPayAuto(){
               let me = this;
               me.blPayAuto = !me.blPayAuto
            },
            selectAgree(){
              let me = this;
              me.agree = !me.agree
            },
            submit(){
              let me = this;
              let recData = me.myAddress.find(item=>{
                return item.ck
              });
              console.log(recData)
              if(!me.agree){me.$message("请同意协议");return;}
              if(recData.name ==''){me.$message("请选择收件人");return;}
              if(me.freightType ==''){me.$message("请选择运输方式");return;}
              if(me.company ==''){me.$message("请输入海运公司");return;}
              if(me.goodsPrice ==''){me.$message("请输入商品价格");return;}
              if(me.receiveAddress ==''){me.$message("请输入收货地址");return;}
              let orderList = ''
              me.myOrders.forEach((item,index) =>{
                 if(index==0){
                    orderList = item.id
                  }else{
                    orderList +=','+item.id
                  }
              })
              let _data = {
                orderIds:orderList,
                receiveRegion:recData.region,
                receiveZipCode:recData.zip_code,
                receiveName:recData.receive_name,
                receivePhone:recData.receive_phone,
                receiveAddress:recData.reveive_address,
                freightType:me.typeList[me.typeIndex].value,
                channelType:'',
                channelCompany:me.company,
                goodsPrice:me.goodsPrice,
                remark:me.remark,
                blPayAuto:me.blPayAuto?0:1
              }
              addMyBills(_data).then(res =>{
                if(res.success){
                  me.$message.success("提交运输成功");
                  setTimeout(()=>{
                    me.$router.go(-1)
                  },1000)
                }else{
                  me.$message.error("提交运输失败~");
                }
              })
            }
        } 
    }
</script>
<style lang='less' scoped>
    /deep/.el-input__inner{
      border:none;
    }
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
            padding:8px 10px;
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
              border-top: 1px solid #ddd;
              .row-wraper{
                flex:1;
                .text-p{
                  margin: 8px 0;
                }
                .colGray{
                  color: #666;
                }
              }
            }
            .item:first-child{
              border-top: none;
            }
          }
          .type-wraper{
            padding:0 10px;
            .item{
              margin: 8px 0;
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