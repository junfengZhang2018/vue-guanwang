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
                       <el-select v-model="form.region" placeholder="请选择">
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
                    <el-input v-model="form.zipCode" placeholder="输入邮政编码"></el-input>
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
                       <el-input v-model="form.receiveName" placeholder="请输入收货人姓名"></el-input>
                    </div>
                </label>
              </div>
            </div>
            <div class="row-flex">
              <div class="input-row">
                <label class="input-label" for="">
                  <div class="input-field">联系电话</div>
                  <div class="wraper">
                    <el-input v-model="form.receivePhone" placeholder="请输入收货人手机号"></el-input>
                    <!-- <el-select v-model="telValue" placeholder="请选择">
                        <el-option
                          v-for="item in telList"
                          :key="item.id"
                          :label="item.value"
                          :value="item.value">
                        </el-option>
                      </el-select> -->
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div class="row">
             <div class="input-row">
                <label class="input-label" for="">
                  <div class="input-field">收货地址</div>
                  <div class="wraper">
                    <el-input
                      type="textarea"
                      :autosize="{ minRows:3, maxRows: 4}"
                      placeholder="请输入收货地址"
                      v-model="form.receiveAddress"
                      resize="none" 
                      >
                    </el-input>
                  </div>
                </label>
              </div>
          </div>
          <div class="bot-button" @click="submit"><a class="button button-primary"><img src="" alt="">保存收货地址</a></div>
        </div>
   </div>
</template>
<script>
   // import 《组件名称》 from '《组件路径》';
    import util from '@/util';
    import {addMyAddress,updMyAddress} from '@/api/index'
    export default {
        components: {},
        data() {
        //这里存放数据
            return {
              areaList:[
                  { id: 0, value: '西马'},
                  { id: 1, value: '东马'},
                  { id: 2, value: '新加坡'}
              ],
              telList:[
                  { id: 0, value: '1535589622'},
                  { id: 1, value: '1535589623'}
              ],
              editData:'',
              type:'',
              form:{
                region:'',
                zipCode:'',
                receiveName:'',
                receivePhone:'',
                receiveAddress:'',
              },
              rules: {
                  region: [
                      { required: true, message: '请选择货运地区' }
                  ],
                  zipCode: [
                      { required: true, message: '请输入邮政编码' }
                  ],
                  receiveName: [
                      { required: true, message: '请输入收件人姓名' }
                  ],
                  receivePhone: [
                      { required: true, message: '请输入收件人电话' }
                  ],
                  receiveAddress: [
                      { required: true, message: '请输入收货地址' }
                  ]
              },
            };
        },
     
        created(){
          let me = this;
          let item = this.$route.query
          console.log(item)
          if(JSON.stringify(item) != "{}"){
            let _data = item
            me.type = _data.type
            me.echoData(_data.items)
          }
        },
         //方法集合
        methods: {
            submit(){                    
              let me = this;
                let errMsg = util.validate(this.form, this.rules);
                if(errMsg){
                  me.$message.error(errMsg);
                }else{
                    let _data = me.form
                    if(me.type =='edit'){                 
                      _data.id = me.editData.id
                      updMyAddress(_data).then(res =>{
                        console.log(res)
                        if(res.success){
                          me.$message.success("收件人更新成功");
                          setTimeout(()=>{
                            me.$router.push('/my/address')
                          },1000)
                        }else{
                          me.$message.error("收件人更新失败~");
                        }
                      })
                    }else{
                      addMyAddress(_data).then(res =>{
                        console.log(res)
                        if(res.success){
                          me.$message.success("新增收件人成功");
                          setTimeout(()=>{
                            me.$router.go(-1)
                          },1000)
                        }else{
                          me.$message.error("新增收件人失败~");
                        }
                      })
                    }
                }
            
            },
            echoData(item){
              console.log(item)
              let me = this;
              me.editData = item;
              me.form.region = item.region||'';
              me.form.receivePhone = item.receive_phone||'';
              me.form.receiveName = item.receive_name||'';
              me.form.receiveAddress = item.reveive_address||'';
              me.form.zipCode = item.zip_code||'';
            }
        }
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