<template>
   <div class='integral'>
        <div class="subhead-right">
            <!-- <a @click.prevent="$router.push('/freightPrice/calculation')" class="breadBtn breadBtn-primary">
                <span>网站首页</span>
            </a> -->
        </div>
        <div class="main">
          <TabNav :current="current" :tabsList="tabsList"></TabNav>
          <div class="content">
            <Default >
              <div>暂无积分记录</div>
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
              current:1,
              tabsList:[{
                name:'钱包',
                url:'/my/wallet',
                num:'0',
                Symbol:'￥'
              },
              {
                name:'积分',
                url:'/my/integral',
                num:'0',
                Symbol:''
              },{
                name:'优惠卷',
                url:'/my/coupon',
                num:'0',
                Symbol:''
              }]
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