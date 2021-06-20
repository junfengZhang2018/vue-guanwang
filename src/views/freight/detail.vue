<template>
    <div class="freightDetail" v-if="tableData">
        <div>
            <a-table :showLink="false" :data="data" v-for="(data, i) in tableData" :key="i" />
        </div>
        <div>
            <b-table :data="data" v-for="(data, i) in tableData[0].goodsFreightDetails" :key="i" />
        </div>
    </div>
</template>

<script>
import ATable from "@/components/ATable";
import BTable from "@/components/BTable";
import { getPriceList, getPriceDetail } from "@/api/index";
export default {
    components: {
        ATable,
        BTable,
    },
    data() {
        //这里存放数据
        return {
            tableData: null,
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        getPriceDetail() {
            let _data = {
                goodRegionId: this.$route.params.id,
            };
            getPriceDetail(_data)
                .then((response) => {
                    let { obj: data } = response;
                    let priceList = [];
                    data.forEach((item, index) => {
                        let _obj = {
                            priceType: 0, // 0-kg 1-m³
                            transportType: 0, // 0-空运  1-海运
                            price: [],
                        };
                        _obj.title = data[0].goodsFreightDetails[0]?.region + " " + data[0].goodsFreightDetails[0]?.freight_type;
                        _obj.goodsFreightDetails = item.goodsFreightDetails || [];
                        _obj.range = [
                            item.weight_section1,
                            item.weight_section2,
                            item.weight_section3,
                        ];
                        let priceData = {};
                        priceData.companyList = item.delivery_company;
                        priceData.per = [
                            item.price_section1,
                            item.price_section2,
                            item.price_section3,
                        ];
                        _obj.price.push(priceData);
                        priceList.push(_obj);
                    });
                    this.tableData = priceList;
                })
                .catch((response) => {
                    console.log(response);
                });
        },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.getPriceDetail();
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
</style>