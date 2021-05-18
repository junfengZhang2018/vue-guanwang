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
                  <el-input v-model="input" placeholder="请输入包裹物流单号"></el-input>
                </div>
              </label>
            </div>
          </div>
          <div class="row">
             <div class="input-row">
                <label class="input-label" for="">
                  <div class="input-field">物品名称（必填）</div>
                  <div class="wraper">
                    <el-input v-model="input" placeholder="请输入包裹物品名称"></el-input>
                  </div>
                </label>
              </div>
          </div>
           <div class="bot-button"><a class="button button-primary"><img src="" alt="">添加包裹</a></div>
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
              input:'',
              areaList:[
                  { id: 0, value: '西马'},
                  { id: 1, value: '东马'},
                  { id: 2, value: '新加坡'}
              ],
              areaValue:'',
              telList:[
                  { id: 0, value: '1535589622'},
                  { id: 1, value: '1535589623'}
              ],
              telValue:'',
              receiptAddress:''
            };
        },
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