<template>
    <div class="table-sticky">
        <div class="sticky-top">
            <table class="table table-border">
                <thead>
                    <tr>
                        <td class="td-title" colspan="4">
                            <div class="th-title">
                                <h1 class="flex-item price-title">
                                    {{data.region}} {{data.freight_type}}价格表
                                </h1>
                                <div
                                    class="text-success"
                                    style="font-size: 16px"
                                >
                                    <strong>RM1 = ¥{{$util.dealFloat($util.accDiv(data.price_rmb, data.price_mb), 2)}}</strong>
                                    <!-- <strong>RM1 = ¥{{exchangeRate}}</strong> -->
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td
                            class="text-primary tc"
                            colspan="4"
                            style="padding-top: 2px; padding-bottom: 2px"
                        >
                            <strong>运输公司：{{data.delivery_company}}</strong>
                            <!-- <strong>运输公司：{{data.price[0].companyList.join('、')}}</strong> -->
                        </td>
                    </tr>
                    <tr>
                        <td
                            style="padding: 2px 0"
                            width="33.33%"
                            v-if="!data.priceType"
                        >
                            重量 (kg)
                        </td>
                        <td
                            style="padding: 2px 0"
                            width="33.33%"
                            v-else
                        >
                            体积 (m³)
                        </td>
                        <td
                            style="padding: 2px 0"
                            width="33.33%"
                        >
                            人民币 (RMB)
                        </td>
                        <td
                            style="padding: 2px 0"
                            width="33.33%"
                        >
                            马币 (RM)
                        </td>
                    </tr>
                </thead>
            </table>
        </div>
        <table class="table table-border" style="margin-top: -14px">
            <tbody>
                <tr>
                    <td width="22%" style="padding:4px">
                        <strong>{{data.weight}}</strong>
                    </td>
                    <td width="22%" style="padding:4px">
                        {{data.price_rmb}}
                    </td>
                    <td width="22%" style="padding:4px">
                        {{data.price_mb}}
                    </td>
                </tr>
                <!-- <tr v-for="(item, i) in 20" :key="i">
                    <td width="22%" style="padding:4px">
                        <strong v-if="!data.priceType">{{i+1}}kg</strong>
                        <strong v-else>{{$util.dealFloat((i+1)*0.1)}}m³</strong>
                    </td>
                    <td width="22%" style="padding:4px">
                        {{rmbList[i]}}
                    </td>
                    <td width="22%" style="padding:4px">
                        {{rmList[i]}}
                    </td>
                </tr> -->
            </tbody>
        </table>
    </div>
</template>

<script>
import util from '@/util';
import { mapGetters } from 'vuex'

export default {
    props: {
        data: { type: Object }
    },
    components: {},
    data() {
        //这里存放数据
        return {
            rmbList: Array.from(Array(20), (v,k) => k+1),
            rmList: []
        };
    },
    //监听属性 类似于data概念
    computed: {
        ...mapGetters(['exchangeRate']),
    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        getPrice(i){
            i = this.data.priceType ? util.dealFloat(i*0.1) : i;
            let base = this.data.priceType ? 1/0.1 : 1;
            let rangeIndex = this.data.range.findIndex(item => {
                return item.length === 2 && item[0] <= i && i <= item[1] || item.length === 1 && i > item[0];
            })   
            let rule = this.data.price[0].per[0];

            if(Array.isArray(rule)){
                let [{price: firstPrice, weight: firstWeight}, {price: nextPrice}] = rule;
                if(rangeIndex <= 0){
                    if(firstWeight >= i) return firstPrice;
                    else return firstPrice + (i-firstWeight) * nextPrice * base;
                }
            }
            return this.data.price[0].per[rangeIndex] * i * base;
        },
        getCurrencyList(){
            this.rmbList = this.rmbList.map(item => util.dealFloat(this.getPrice(item), 0));
            this.rmList = this.rmbList.map(item => util.dealFloat(util.accDiv(item, this.exchangeRate), 2));
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        // this.getCurrencyList();
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {},
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less' scoped>
@import "../assets/style/table.less";
td:not(.td-title){
    text-align: center;
}
.table-sticky {
    margin-bottom: 12px;
    position: relative;
    .sticky-top {
        position: sticky;
        z-index: 3;
        top: 0px;
        background-color: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(2px);
    }
}
</style>