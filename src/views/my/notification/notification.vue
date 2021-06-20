<template>
   <div class='notification'>
        <div class="subhead-right">
            <a @click.prevent="$router.push('/my/notification/setting')" class="breadBtn breadBtn-primary">
                <span>通知设置</span>
            </a>
        </div>
        <div class="main">
          <div class="content">
            <div class="panel" v-if="data.length">
              <div class="panel-title flex">
                <p>消息通知</p>
                <p>{{data.length}}条记录</p>
              </div>
              <ul class="notify">
                <li>
                  <div class="flex">
                    <div class="item-title">运单发货通知</div>
                    <div class="item-date tr">
                      <time>15 Jun 2021 16:32</time>
                    </div>
                  </div>
                  <div class="item-desc">
                    运单 202106131407248352858925 已完成付款
                  </div>
                </li>
              </ul>
            </div>
            <Default v-else>暂无记录</Default>
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
                data: []
            };
        },
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
      padding: 8px 12px;
      border-bottom: 1px dashed #eeeeee;
      .item-title{
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 4px;
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