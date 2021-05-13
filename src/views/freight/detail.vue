<template>
   <div class='freightDetail'>
       <a-table :showLink="false" :data="data" v-for="(data, i) in tableData" :key="i" />
       <b-table :data="data" v-for="(data, i) in tableData" :key="i" />
   </div>
</template>

<script>
    import ATable from '@/components/ATable';
    import BTable from '@/components/BTable';
    import tableData from './data'

    export default {
        components: {
            ATable, BTable
        },
        data() {
        //这里存放数据
            return {
                tableData
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
            scrollTo(0, 0);
            let { id } = this.$route.params;
            this.tableData = this.tableData[Number(id)];
            let tableData = [];
            let price = this.tableData.price;
            price.forEach((item, i) => {
                tableData.push({
                    ...this.tableData,
                    price: [item]
                });
            });
            this.tableData = tableData;
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