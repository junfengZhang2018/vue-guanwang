<template>
   <div class='address'>
        <div class="subhead-right">
            <a @click.prevent="$router.push('/my/address/creatAddress')" class="breadBtn breadBtn-primary">
                <span>创建地址</span>
            </a>
        </div>
        <div class="main">
          <div class="content">
            <Default>
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
    export default {
        components: {Default},
        data() {
        //这里存放数据
            return {
                
            };
        },
    }
</script>
<style lang='less' scoped>
    .main{
        .content{
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
   @media screen and (max-width: 768px) {
    .main{
        
    }
  }
</style>