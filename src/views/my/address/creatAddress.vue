<template>
   <div class='creatAddress'>
        <div class="subhead-right">
        </div>
        <div class="main">
          <div class="row">
            <div class="row-flex">
              <div class="input-row">
                <label class="input-label" for="">
                  <div class="input-field">货运地区</div>
                  <!-- <input class="input" autocomplete="off" placeholder="请输入昵称" type="text" name="" id=""> -->
                    <div class="wraper">
                       <el-select v-model="areaValue" placeholder="请选择">
                        <el-option
                          v-for="item in areaList"
                          :key="item.id"
                          :label="item.value"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </div>
                </label>
              </div>
            </div>
            <div class="row-flex">
              <div class="input-row">
                <label class="input-label" for="">
                  <div class="input-field">邮政编码</div>
                  <div class="wraper">
                    <el-input v-model="input" placeholder="输入邮政编码"></el-input>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="row-flex">
              <div class="input-row">
                <label class="input-label" for="">
                  <div class="input-field">收货人</div>
                  <!-- <input class="input" autocomplete="off" placeholder="请输入昵称" type="text" name="" id=""> -->
                    <div class="wraper">
                       <el-input v-model="input" placeholder="请输入收货人姓名"></el-input>
                    </div>
                </label>
              </div>
            </div>
            <div class="row-flex">
              <div class="input-row">
                <label class="input-label" for="">
                  <div class="input-field">联系电话</div>
                  <div class="wraper">
                    <el-select v-model="telValue" placeholder="请选择">
                        <el-option
                          v-for="item in telList"
                          :key="item.id"
                          :label="item.value"
                          :value="item.value">
                        </el-option>
                      </el-select>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div class="row">
             <div class="input-row">
                <label class="input-label" for="">
                  <div class="input-field">收获地址</div>
                  <div class="wraper">
                    <el-input
                      type="textarea"
                      :autosize="{ minRows:3, maxRows: 4}"
                      placeholder="请输入收货地址"
                      v-model="receiptAddress"
                      resize="none" 
                      >
                    </el-input>
                  </div>
                </label>
              </div>
          </div>
          <div class="bot-button"><a class="button button-primary"><img src="" alt="">保存收货地址</a></div>
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
      display: block;
      max-width: 480px;
      margin: 0 auto;
      .row{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 24px 0;
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