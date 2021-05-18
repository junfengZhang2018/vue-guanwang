<template>
   <div class='notification'>
        <div class="subhead-right">
            <a @click.prevent="$router.push('/my/notification/setting')" class="breadBtn breadBtn-primary">
                <span>通知设置</span>
            </a>
        </div>
        <div class="main">
          <div class="content">
            <Default >
              <div>暂无记录</div>
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
        
    }
   @media screen and (max-width: 768px) {
    .main{
        
    }
  }
</style>