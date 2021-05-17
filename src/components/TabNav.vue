<template>
    <div class="tabNav">
        <div class="nav-item" :class="current==i?'select':''" v-for="(item, i) in tabsList" :key="i" @click="$router.push(item.url)">
          <div class="number"><span v-if="item.Symbol">{{item.Symbol}}</span>{{item.num}}</div>
          <div class="desc">{{item.name}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props:["current",'tabsList'],
    data() {
        return {
            contactWay: {
            },
        };
    },
    methods: {
    },
    created() {
        // 将父组件props传递过来的值赋给data中contactWay
        this.contactWay = this.contacts;
    },
};
</script>
<style lang="less" scoped>
.tabNav{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #fff;
    border: 1px solid #eeeeee;
    .nav-item{
        flex: 1;
        padding: 6px;
        user-select: none;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        cursor: pointer;
        width: 0;
        min-width: 0;
        border-left: 1px solid #eee;
        .number{
          font-size: 18px;
          font-weight: bold;
        }
        .desc{
          margin-top: 2px;
          font-size: 13px;
          line-height: 16px;
        }
    }
    .nav-item.select{
      color: #007fff;
    }
    .nav-item:first-child{
        border: none;
    }
}
</style>