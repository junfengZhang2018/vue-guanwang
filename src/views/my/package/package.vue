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
              <div class="item" >
                  <div class="checkbox">
                    <span>#1</span>
                    <img src="../../../assets/images/checkboxG.png" alt="">
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
                      <div class="right">
                        <div class="cell-check right-icon">
                            <span class="" >查看详情</span>
                        </div>
                      </div>

                    </div>
                 </div>
              </div>
              <div class="submit"> </div>
            </div>
                
          <Default v-else>
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
     import {getMyOrders} from '@/api/index'
    export default {
        components: {Default},
        data() {
        //这里存放数据
            return {
                hasPackage:false,
                myOrders:[]
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
          .packageList{
             width: 100%;
             height: auto;
             background-color: #fff;
             padding:12px 10px;
            .item{
              width: 100%;
              height: auto;
              border-bottom: 1px dashed #ddd;
              display: flex;
              justify-content: center;
              align-items: center;
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
              }
              img{
                width: 20px;
                height: 20px;
                margin:5px 15px;
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