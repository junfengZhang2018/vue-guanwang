<template>
   <div class='creatAddress'>
        <div class="subhead-right">
            <span class="topText" @click.prevent="$router.push('/my/package/addPackage')">如何添加?</span>
        </div>
        <div class="main">
          <div class="row">
            <div class="input-row">
              <label class="input-label" for="">
                <div class="input-field">物流单号（必填）</div>
                <div class="wraper">
                  <el-input v-model="billCode" placeholder="请输入包裹物流单号"></el-input>
                </div>
              </label>
            </div>
          </div>
          <div class="row">
             <div class="input-row">
                <label class="input-label" for="">
                  <div class="input-field">物品名称（必填）</div>
                  <div class="wraper">
                    <el-input v-model="goods" placeholder="请输入包裹物品名称"></el-input>
                  </div>
                </label>
              </div>
          </div>
           <div class="bot-button"><a class="button button-primary" @click="submit"><img src="" alt="">添加包裹</a></div>
        </div>
   </div>
</template>
<script>
   // import 《组件名称》 from '《组件路径》';
    import {addMyOrder} from '@/api/index'
    export default {
        components: {},
        data() {
        //这里存放数据
            return {
              goods:'',
              billCode:'',
            };
        },
        created(){
          let me = this;
          // let {item} = this.$route.params
          // if(item){
          //   let _data = JSON.parse(item)
          //   me.type = _data.type
          //   me.echoData(_data.items)
          // }
        },
         //方法集合
        methods: {
            submit(){                    
              let me = this;
              if(me.billCode ==''){me.$message("请输入运单号");return;}
              if(me.goodsName ==''){me.$message("请输入物品名称");return;}
              let _data = {
                billCode:me.billCode,
                goodsName:me.goods,
              }
              console.log(_data)
              addMyOrder(_data).then(res =>{
                if(res.success){
                  me.$message.success("新增收件人成功");
                  setTimeout(()=>{
                    me.$router.push('/my/package')
                  },1000)
                }
              })
            },
            echoData(item){
              console.log(item)
              let me = this;
              me.editData = item;
              me.areaValue = item.region||'';
              me.telValue = item.receive_phone||'';
              me.receiveName = item.receive_name||'';
              me.receiptAddress = item.reveive_address||'';
              me.zipCode = item.zip_code||'';
            }
        }
    }
</script>
<style lang='less' scoped>
    .main{
      width: 100%;
      background-color: #fff;
      padding: 10px;
      .row{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 4px 0 12px;
        .row-flex{
          flex: 1;
        }
        .input-row{
          display: flex;
          width: 100%;
          .input-label{
            display: block;
            width: 100%;
            user-select: none;
            .input-field{
              font-size: 14px;
              line-height: 18px;
              margin-bottom: 4px;
              color: #586C94;
            }
            .wraper{
              line-height: 20px;
            }
          }
        }
        .row-flex:nth-child(2n){
          margin-left: 24px;
        }
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
        background-color: #198cff;
        border: 1px solid #007fff;
      }
    }
 @media screen and (max-width: 768px) {
    .main{
      padding: 12px;
      box-sizing: border-box;
      .bot-button{
        width: 100%;
        display: flex;
        .button{
        width: 100%;
        padding: 8px 12px;
        }
      }
    }
  }
</style>