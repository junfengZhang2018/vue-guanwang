<template>
    <div>
        <Search />
        <div v-if="dataList.length">数据</div>
        <Default v-else>请输入 二个字符 以上的搜索关键词</Default>
    </div>
</template>

<script>
    import Search from '@/components/Search'
    import Default from '@/components/default'

    export default {
        components: { Search, Default },
        data() {
        //这里存放数据
            return {
                searchContent: '',
                dataList: []
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
    .search{
        margin-top: 10px;
        @media screen and (max-width: 768px) {
            .search-wrap{
                padding: 0 12px;
            }
        }
        .input{
            border-radius: 4px 0 0 4px;
            border-width: 2px;
            border-color: #007fff;
            border-right: none;
            padding: 6px 8px;
        }
        .btn{
            border-radius: 0 4px 4px 0;
            padding: 4px 12px;
            font-weight: bold;
            border-width: 2px;
        }
    }
</style>