<template>
   <div class='wallet'>
       <div class="subhead-right">
            <a @click.prevent="$router.push('/my/wallet/deposit')" class="breadBtn breadBtn-success">
                <div class="icon icon-balance"></div>
                <span>余额充值</span>
            </a>
        </div>
        <Default>暂无流水记录</Default>
   </div>
</template>

<script>
    import Default from '@/components/default';

    export default {
        components: { Default },
        data() {
        //这里存放数据
            return {
            
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