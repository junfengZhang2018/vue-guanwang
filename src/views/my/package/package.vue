<template>
   <div class='package'>
      <div class="subhead-right">
        <a @click.prevent="$router.push('/my/package/addPackage')" class="breadBtn breadBtn-primary">
            <span>添加包裹</span>
        </a>
      </div>
      <div class="main">
        <div class="content">
           <div class="packageList" v-if="hasPackage">
              <div class="item" v-for="(item, index) in myOrders" :key="index" >
                  <div class="checkbox">
                    <span>#{{item.id}} </span>
                    <img class="imgBox" @click="selectPackage(item,index)" :src="item.ck?require('../../../assets/images/select.png'):require('../../../assets/images/checkboxG.png')"  alt="">
                  </div>
                  <div class="warper">
                    <div class="title">{{item.bill_code}}</div>
                    <div class="info">
                      <div class="left">
                          <div class="row">
                            {{item.goods_name}}
                          </div>
                          <div class="row red" v-if="item.status==0">
                             未入库
                          </div>
                      </div>
                      <div class="right">
                        <div class="cell-check right-icon">
                            <span class="" >查看详情</span>
                        </div>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
            <div v-if="hasPackage" class="submit">
              <img class="imgBox" @click="allSelects" :src="allSelect?require('../../../assets/images/select.png'):require('../../../assets/images/checkboxG.png')" alt="">
              <span class="text-success">全选 2</span>
              <span class="submit-button" @click="transport" >提交运输（0）</span>
             </div>
            <Default v-if="!hasPackage">
              <div>暂无包裹</div>
              <div class="addPackage"><a class="button button-primary"  @click.prevent="$router.push('/my/package/addPackage')"><img src="" alt="">添加包裹</a></div>
            </Default>
        </div>
      </div>
   </div>
</template>
<script>
   // import 《组件名称》 from '《组件路径》';
    import Default from '@/components/default';
    import {getMyOrders,getMyOrderDetail} from '@/api/index'

    export default {
        components: {Default},
        data() {
        //这里存放数据
            return {
                hasPackage:false,
                myOrders:[],
                allSelect:false
            };
        },
        created(){
          this.getMyOrders();
          this.getMyOrderDetail()
        },
         //方法集合
        methods: {
            getMyOrders(){
              let me = this;
              getMyOrders().then(res =>{
                console.log(res)
                if(res.success&&res.obj.length>0){
                  res.obj.forEach(item =>{
									item.ck = false
								})
                me.myOrders = res.obj
                me.hasPackage = true
                }
              })
            },
            getMyOrderDetail(){
              let _data = {
                id:1
              }
              getMyOrderDetail(_data).then(res =>{
                console.log(res)
              })
            },
            allSelects(){
              let me = this;
              let myOrdersData;
              me.allSelect = !me.allSelect;
              me.myOrders.forEach(item=>{
                item.ck = me.allSelect
              })
             me.myOrders = me.myOrders
            },
            selectPackage(item,index){
              let me = this;
              me.myOrders[index].ck = !me.myOrders[index].ck;
              
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
          .imgBox{
              width: 20px;
              height: 20px;
              margin:5px 15px 5px 0;
            }
          .packageList{
             width: 100%;
             height: auto;
             background-color: #fff;
             padding:12px 10px;
            .item{
              width: 100%;
              height: auto;
              border-top: 1px dashed #ddd;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 5px 0;
            }
            .item:first-child{
              border-top:none;
            }
            .checkbox{
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              flex-wrap: wrap;
              span{
                color: #007fff;
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
              .right{
                position: relative;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                font-size: 14px;
                height: 100%;
                width: 100px;
                span{
                  color: #007fff;
                  cursor: pointer;
                  text-decoration: underline;
                  margin-right: 15px;
                }
              }
            }
            }
            
          }
          .submit{
             width: 100%;
             height: auto;
             background-color: #fff;
             padding:12px 10px;
             margin-top: 10px;
             display: flex;
             align-items: center;
             .imgBox{
              margin:5px 5px 5px 0;
            }
            span{
              margin-right: 10px;
              font-weight: bold;
            }
            .submit-button{
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 4px;
              text-align: center;
              line-height: 24px;
              font-size: 16px;
              padding: 4px 16px;
              white-space: nowrap;
              background-color: #1ea11c;
              color: #fff;
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