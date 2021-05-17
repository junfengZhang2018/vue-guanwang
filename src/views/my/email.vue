<template>
   <div class='email'>
        <div class="subhead-right">
            <a @click.prevent="$router.push('/freightPrice/calculation')" class="breadBtn breadBtn-primary">
                <span>网站首页</span>
            </a>
        </div>
        <div class="main">
            <div class="alert alert-warning">
                <div class="alert-title">请验证电子邮箱</div>
                <div class="alert-content">
                    <span >如需要修改账号电子邮箱请 </span>
                    <span class="link">联系客服</span>
                </div>
            </div>
            <div class="m-main">
              <div class="input-row">
                <label class="input-label" for="">
                  <div class="input-field">登录邮箱</div>
                  <input readonly  class="input" autocomplete="off" placeholder="请输入昵称" value="" type="text" name="" id="">
                </label>
              </div>
              <a class="button button-primary"><img src="" alt="">验证邮箱</a>
            </div>
      
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
      width: 100%;
      .m-main{
        display: block;
        max-width: 360px;
        margin: 0 auto;
      }
      .alert{
        padding: 8px 12px;
        font-size: 14px;
        line-height: 16px;
        margin: 8px 0;
      }
      .alert-warning {
        color: #d46419;
        background-color: rgba(212, 100, 25, 0.1);
        }
      .alert-title {
          font-size: 16px;
          line-height: 24px;
          font-weight: bold;
      }
      .alert-content{
        margin-top: 4px;
      }
      .link {
        color: #007fff;
        text-decoration: underline;
        cursor: pointer;
      }
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
      .m-main{
        padding-left: 12px;
        padding-right: 12px;
        box-sizing: border-box;
      }
      .alert-content{
        font-size: 13px;
        line-height: 16px;
      }
      .input-row{
        margin: 16px 0;
      }      
      .button{
        width: 100%;
        padding: 8px 12px;
        box-sizing: border-box;
      }
    }
  }
</style>