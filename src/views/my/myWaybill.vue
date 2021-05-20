<template>
   <div class='myWaybill'>
        <div class="subhead-right">
            <a @click.prevent="$router.push('/freightPrice/calculation')" class="breadBtn breadBtn-primary">
                <span>查找运单</span>
            </a>
        </div>
        <div class="main">
          <TabNav :tabsList="tabsList" :url="$route.path"></TabNav>
          <div class="content">
            <Default>
              <div>暂无流水记录</div>
            </Default>
          </div>
        </div>
   </div>
</template>
<script>
   // import 《组件名称》 from '《组件路径》';
    import TabNav from '@/components/TabNav';
    import Default from '@/components/default';
    export default {
        components: {TabNav,Default},
        data() {
        //这里存放数据
            return {
              tabsList:[{
                name:'待收齐',
                state: 'receive',
                num:'0',
              },{
                name:'待包装',
                state: 'package',
                num:'0',
              },{
                name:'待付款',
                state: 'payment',
                num:'0',
              },{
                name:'运输中',
                state: 'transport',
                num:'0',
              },{
                name:'已签收',
                state: 'delivery',
                num:'0',
              }],
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