<template>
   <div class='default'>
       <div class="empty-icon"></div>
       <div class="empty-text">
           <slot />
       </div>
   </div>
</template>

<script>
   // import 《组件名称》 from '《组件路径》';

    export default {
        name: 'Default',
        components: {},
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
    .default{
        margin: 0 auto;
        padding: 32px 0;
        text-align: center;
        color: #666;
        .empty-icon {
            width: 48px;
            height: 48px;
            margin: 16px auto;
            background-repeat: no-repeat;
            background-size: 100%;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Cpath d='M916.21 970.105H107.79V53.895h592.842l215.579 204.8v711.41zm-754.526-53.894h700.632V285.642L679.074 107.79h-517.39v808.422z' fill='%23666'/%3E%3Cpath d='M916.21 323.368H646.738V53.895h53.895v215.579H916.21v53.894zm-323.368 107.79H269.474v53.895h323.368v-53.895zm-323.368 107.79v53.894h485.052v-53.895H269.474zm0 161.684h485.052v-53.895H269.474v53.895zm0 107.79h485.052v-53.896H269.474v53.895z' fill='%23666'/%3E%3C/svg%3E");
        }
        .empty-text{
            font-size: 16px;
            line-height: 22px;
            margin: 16px 0;
        }
    }
</style>