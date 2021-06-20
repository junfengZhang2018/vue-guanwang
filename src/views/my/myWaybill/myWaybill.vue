<template>
   <div class='myWaybill'>
      <div class="subhead-right">
          <a @click.prevent="$router.push('/my/myWaybill/search')" class="breadBtn breadBtn-primary">
              <span>查找运单</span>
          </a>
      </div>
      <div class="main">
        <TabNav :tabsList="tabsList"   :url="$route.path"></TabNav>
        <div class="content">
          <div class="billList" v-if="myBillList.length>0">
            <div class="item" v-for="(item,index) in myBillList" :key="index" @click="goBillDetails(item)">
              <div class="title"><img src="" alt="">{{item.status}}<span class="mglr5">&nbsp;&nbsp;·&nbsp;&nbsp;</span>{{item.id}}</div>
                <div class="info">
                  <div class="left">
                    <div class="row">
                      {{item.receive_name}}（{{item.receive_phone}}）
                    </div>
                    <div class="row">
                      {{item.receive_region}} -{{item.freight_type}} - {{item.channel_company}}
                    </div>
                    <div class="row gray">
                      <span>Jun 13</span><span>&nbsp;&nbsp;·&nbsp;&nbsp;</span><u>4.50kg</u><span>&nbsp;&nbsp;·&nbsp;&nbsp;</span><u>0.06m³</u>
                    </div>
                  </div>
                  <div class="right cell-ft">
                    
                  </div>
                </div>
            </div>
          </div>
          <Default v-else>
            <div>暂无运单数据</div>
          </Default>
        </div>
      </div>
   </div>
</template>
<script>
   // import 《组件名称》 from '《组件路径》';
    import TabNav from '@/components/TabNav';
    import Default from '@/components/default';
    import {getMyBills,getMyBillCount} from '@/api/index'
    export default {
        components: {TabNav,Default},
        data() {
        //这里存放数据
            return {
              tabsList:[{
                name:'待收齐',
                state: 'receive',
                num:'0',
              },{
                name:'待包装',
                state: 'package',
                num:'0',
              },{
                name:'待付款',
                state: 'payment',
                num:'0',
              },{
                name:'运输中',
                state: 'transport',
                num:'0',
              },{
                name:'已签收',
                state: 'delivery',
                num:'0',
              }],
              hasBill:true,
              myBillList:[]
            };
        },
        created(){
          this.getMyBillCount()
        },
        watch:{
          $route: {
              handler: function(val, oldVal){
                console.log(val);
                this.getMyBills(val.query.name) 
              },
              // 深度观察监听
              deep: true
            }
        },
        methods:{
          getMyBillCount(){
              let me = this;
              getMyBillCount().then(res =>{
                  console.log(res)
                if(res.success){
                  
                }
              })
          },
          getMyBills(status){
            let me = this;
            let _data = {
              status:status||''
            }
            getMyBills(_data).then(res =>{
              console.log(res)
              if(res.success){
                me.myBillList = res.obj
              }
            })
          },
          goBillDetails(item){
            let me = this;
            let _data = {
              details:item
            }
            me.$router.push({ 
              path: '/my/myWaybill/details',
              query:_data
            })
          }
        }
    }
</script>
<style lang='less' scoped>
    .main{
      .mglr5{
        margin:0 5px;
      }
      .billList{
        width: 100%;
        height: auto;
        background-color: #fff;
        margin-top: 10px;
        .item{
          width: 100%;
          height: auto;
          border-top: 1px dashed #ddd;
          padding: 10px;
          box-sizing: border-box;
          position: relative;
        }
        .item:first-child{
          border-top:none;
        }
        .title{
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
            padding:10px 0;
            .row{
              padding:4px 0;
              font-size: 13px;
              color: #000;
            }
            .row.gray{
              color: #999;

            }
          }
          .right{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
           
          }
          .cell-ft:after{
            content: '';
            position: absolute;
            right: 15px;
            top: 50%;
            width: 10px;
            height: 10px;
            margin-top: -6px;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
            border-right: 1px solid #333;
            border-top: 1px solid #333;
          }
        }
      }
    }
   @media screen and (max-width: 768px) {
    .main{
        
    }
  }
</style>