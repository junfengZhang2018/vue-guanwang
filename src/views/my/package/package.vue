<template>
   <div class='package'>
      <div class="subhead-right">
        <a @click.prevent="$router.push('/my/package/addPackage')" class="breadBtn breadBtn-primary">
            <span>添加包裹</span>
        </a>
      </div>
      <div class="main">
        <div class="content">
          <Default>
            <div>暂无包裹</div>
            <div class="addPackage"><a class="button button-primary"><img src="" alt="">添加包裹</a></div>
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