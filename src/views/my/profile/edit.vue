<template>
   <div class='edit'>
        <div class="subhead-right">
            <a @click.prevent="$router.push('/freightPrice/calculation')" class="breadBtn breadBtn-primary">
                <span>网站首页</span>
            </a>
        </div>
        <div class="main">
           <div class="input-row">
             <label class="input-label" for="">
               <div class="input-field">昵称</div>
               <input class="input" autocomplete="off" placeholder="请输入昵称" type="text" name="" id="">
             </label>
           </div>
           <div class="input-row">
             <label class="input-label" for="">
               <div class="input-field">性别</div>
               <div class="checkbox-wraper">
                <el-radio-group v-model="sex">
                    <el-radio :label="item.id" v-for="(item, i) in sexList" :key="i">{{item.value}}</el-radio>
                </el-radio-group>
               </div>
             </label>
           </div>
           <a class="button button-primary"><img src="" alt="">修改资料</a>
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
              sex: 0,
              sexList: [
                  { id: 0, value: '西马'},
                  { id: 1, value: '东马'},
                  { id: 2, value: '新加坡'}
              ]
            };
        },
    }
</script>
<style lang='less' scoped>
    .main{
      display: block;
      max-width: 360px;
      margin: 0 auto;
      .input-row{
        display: flex;
        margin: 24px 0;
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
          .checkbox-wraper{
            line-height: 20px;
            padding: 8px 10px 8px 0;
          }
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
</style>