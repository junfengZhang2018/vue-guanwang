<template>
   <table class="table table-border">
        <thead>
            <tr>
                <td colspan="4">
                    <div class="th-title">
                        <div class="icon icon-air"></div>
                        <h3 class="flex-item price-title">{{data.title}}</h3>
                        <div v-if="showLink">
                            <a class="price-table" @click="$router.push('/freightPrice/detail')">
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
                    <strong>{{item}}</strong>
                </td>
            </tr>
            <tr v-for="(item, i) in data.price" :key="i">
                <td>
                    <div class="tc" v-for="(val, index) in item.companyList" :key="index">
                        <u><strong>{{val}}</strong></u>
                    </div>
                </td>
                <td v-for="(val, index) in item.perKg" :key="index">
                    <div v-for="per in val" :key="per">{{per}}</div>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    <div class="table-desc" v-for="(item, i) in data.desc" :key="i">{{i+1}}. {{item}}；</div>
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
            showLink: { type: Boolean, default: true }
        },
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
    .table{
        border-spacing: 0;
        overflow: hidden;
        width: 100%;
        margin: 8px 0 12px;
        font-size: 14px;
        line-height: 20px;
        &.table-border{
            border-bottom: 1px solid #eee;
            border-right: 1px solid #eee;
            td{
                border-top: 1px solid #eee;
                border-left: 1px solid #eee;
            }
        }
        thead > tr{
            background-color: #fafcff;
        }
        td{
            padding: 10px;
        }
        .th-title{
            display: flex;
            align-items: center;
            .icon{
                margin-right: 8px;
            }
            .price-title{
                font-size: 18px;
                line-height: 24px;
                flex: 1;
            }
        }
        .price-table{
            display: block;
            position: relative;
            padding-right: 18px;
            color: #007fff;
            &:after{
                content: '';
                position: absolute;
                top: 50%;
                right: 9px;
                margin-top: -4px;
                width: 7px;
                height: 7px;
                border-left: 1px solid #007fff;
                border-top: 1px solid #007fff;
                transform: rotate(135deg);
            }
        }
        tbody{
            background-color: #fff;
            td{
                padding: 6px 10px;
            }
            .text-info {
                color: #586C94;
            }
            .table-desc{
                font-size: 13px;
                line-height: 16px;
                margin: 4px 0;
            }
        }
    }
</style>