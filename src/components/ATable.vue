<template>
   <table class="table table-border">
        <thead>
            <tr>
                <td colspan="4">
                    <div class="th-title">
                        <div class="icon icon-air"></div>
                        <h3 class="flex-item price-title">{{data.title}}</h3>
                        <div v-if="showLink">
                            <a class="price-table" @click="$router.push(`/freightPrice/detail/${tableId}`)">
                                <span>价格表</span>
                            </a>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td colspan="4" class="tc" style="padding-top:4px;padding-bottom:2px">
                    <p>价格单位人民币，支持马币在线付款</p>
                </td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="tc text-info">
                    <strong>派送公司</strong>
                </td>
                <td class="text-info" v-for="(item, i) in data.range" :key="i">
                    <strong>
                        <template>
                            {{item}}
                        </template>
                        <!-- <template v-else>
                            > {{item}}
                        </template> -->
                        <!-- {{data.priceType?'m³':'kg'}} -->
                    </strong>
                </td>
                <td v-if="!data.range.length"></td>
            </tr>
            <tr v-for="(item, i) in data.price" :key="i">
                <td>
                    <div class="tc">
                        <u><strong>{{item.companyList}}</strong></u>
                    </div>
                </td>
                <td v-for="(val, index) in item.per" :key="index">
                    <template v-if="Array.isArray(val)">
                        <div v-for="(a, index) in val" :key="index">
                            {{index?'续':'首'}} {{a.price}}/<template v-if="a.weight!=1">{{a.weight}}</template>
                        </div>
                    </template>
                    <template v-else>
                        {{val}}
                    </template>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    <div class="table-desc" vhtml>{{data.desc}}</div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
   // import 《组件名称》 from '《组件路径》';

    export default {
        props: {
            data: { type: Object },
            showLink: { type: Boolean, default: true },
            tableId: { type: Number }
        },
        components: {},
        data() {
        //这里存放数据
            return {
            
            };
        },
        //监听属性 类似于data概念
        computed: {

        },
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
    @import '../assets/style/table.less';
</style>