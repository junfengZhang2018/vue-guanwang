<template>
   <div class='finance'>
       <div class="main">
            <TabNav v-if="$store.state.levelList.length === 3" :tabsList="tabsList"></TabNav>
            <div class="content">
                <router-view/>
            </div>
        </div>
   </div>
</template>

<script>
    import TabNav from '@/components/TabNav';

    export default {
        components: { TabNav },
        data() {
        //这里存放数据
            return {
                tabsList:[{
                    name:'钱包',
                    url:'/my/wallet',
                    num:'0',
                    Symbol:'￥'
                }, {
                    name:'积分',
                    url:'/my/integral',
                    num:'0',
                    Symbol:''
                }, {
                    name:'优惠券',
                    url:'/my/coupon',
                    num:'0',
                    Symbol:''
                }],
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

</style>