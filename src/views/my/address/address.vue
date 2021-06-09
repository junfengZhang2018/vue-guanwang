<template>
   <div class='address'>
        <div class="subhead-right">
            <a @click.prevent="$router.push('/my/address/creatAddress')" class="breadBtn breadBtn-primary">
                <span>创建地址</span>
            </a>
        </div>
        <div class="main">
          <div class="content">
            <div class="hasAddress" v-if="hasAddress">
              <div class="item" v-for="(item,index) in myAddress" :key="index">
                <div class="title">{{item.receive_name}}</div>
                <div class="info">
                  <div class="left">
                    <div class="row">
                      电话:{{item.receive_phone}}
                    </div>
                    <div class="row">
                      地区:{{item.region}}
                    </div>
                    <div class="row">
                      地址:{{item.reveive_address}}
                    </div>
                  </div>
                  <div class="right">
                    <span class="button " @click="editAddress(item)">修改</span>
                    <span class="button red">删除</span>
                  </div>
                </div>
              </div>
            </div>
            <Default v-else>
              <div>暂无收货地址</div>
              <div class="newAdress">
                <a @click.prevent="$router.push('/my/address/creatAddress')" class="button button-success"><div class="icon icon-add"></div>创建收货地址</a>
              </div>
            </Default>
          </div>
        </div>
   </div>
</template>
<script>
   // import 《组件名称》 from '《组件路径》';
    import Default from '@/components/default';
    import {queryMyAddress} from '@/api/index'
    export default {
        components: {Default},
        data() {
        //这里存放数据
            return {
                hasAddress:false,
                myAddress:[]
            };
        },
        created(){
          this.getMyAddress()
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
            editAddress(item){
                let me = this;
                let _data = {
                  type:'edit',
                  items:item
                }
                me.$router.push({
                  path: `/my/address/creatAddress/${JSON.stringify(_data)}`,
                })
            }
        } 
    }
</script>
<style lang='less' scoped>
    .main{
        .content{
          .hasAddress{
            width: 100%;
            height: auto;
            background-color: #fff;
            padding: 10px;
            .item{
              width: 100%;
              height: auto;
              border-bottom: 1px dashed #ddd;
            }
            .item:last-child{
              border-bottom:none;
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
                  color: #999;
                }
              }
              .right{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                span{
                  margin-bottom: 6px;
                  font-size: 12px;
                  padding: 4px;
                  border: 1px solid #444;
                  border-radius: 3px;
                }
                span.red{
                  color: red;
                   border: 1px solid red;
                }
              }
            }
            
           
          }
          .newAdress{
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
            .button-success{
              color: #fff;
              background-color: #1ea11c;
              border: 1px solid #059603;
            }
          }
        }
    }

</style>