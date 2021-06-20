<template>
   <div class='wallet'>
       <div class="subhead-right">
            <a @click.prevent="$router.push('/my/wallet/deposit')" class="breadBtn breadBtn-success">
                <div class="icon icon-balance"></div>
                <span>余额充值</span>
            </a>
        </div>
        <div class="panel" v-if="data.length">
            <div class="panel-title flex">
              <p>资金记录</p>
              <p>{{data.length}}条记录</p>
            </div>
            <ul class="notify">
              <li>
                <div class="flex">
                  <div class="item-title">运费结算-￥72.00</div>
                  <div class="item-date tr">
                    <time>15 Jun 2021 16:32</time>
                  </div>
                </div>
              </li>
            </ul>
        </div>
        <Default v-else>暂无流水记录</Default>
   </div>
</template>

<script>
    import Default from '@/components/default';

    export default {
        components: { Default },
        data() {
        //这里存放数据
            return {
                data: []
            };
        },
        //监听属性 类似于data概念
        computed: {},
        //监控data中的数据变化
        watch: {},
        //方法集合
        methods: {
        
        },
        //生命周期 - 创建完成（可以访问当前this实例）
        created() {
        
        },
        //生命周期 - 挂载完成（可以访问DOM元素）
        mounted() {
        
        },
        beforeCreate() {}, //生命周期 - 创建之前
        beforeMount() {}, //生命周期 - 挂载之前
        beforeUpdate() {}, //生命周期 - 更新之前
        updated() {}, //生命周期 - 更新之后
        beforeDestroy() {}, //生命周期 - 销毁之前
        destroyed() {}, //生命周期 - 销毁完成
        activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
    }
</script>
<style lang='less' scoped>
  .flex{
    justify-content: space-between;
  }
  .panel-title{
    padding: 4px 12px;
    border-bottom: 1px solid #eeeeee;
    >p{
      font-size: 15px;
      line-height: 24px;
    }
  }
  .notify{
    li{
      padding: 12px;
      border-bottom: 1px dashed #eeeeee;
      .item-title{
        font-size: 16px;
        line-height: 24px;
      }
      .item-date{
        padding-left: 12px;
        font-size: 14px;
        line-height: 24px;
        color: #999;
      }
      .item-desc{
        font-size: 14px;
        line-height: 18px;
        color: #333;
      }
      &:last-child{
        border: none;
      }
    }
  }
</style>