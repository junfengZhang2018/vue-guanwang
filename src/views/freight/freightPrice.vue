<template>
   <div class='freightPrice'>
        <div class="subhead-right">
            <a @click.prevent="$router.push('/freightPrice/calculation')" class="breadBtn breadBtn-success">
                <div class="icon icon-calculator"></div>
                <span>计算运费</span>
            </a>
        </div>
        <div class="top">
            <div class="tab-nav">
                <div class="nav-item tc" v-for="(item, i) in regionList" :key="i">
                    <a :href="'#table'+i+'0'">
                        <div>{{item.name}}</div>
                        <div class="desc">{{item.engName}}</div>
                    </a>
                </div>
            </div>
        </div>
        <a-table :id="'table'+data.region+data.index" :tableId="data.id" :data="data" v-for="(data, i) in tableData" :key="i" />
   </div>
</template>

<script>
    import ATable from '@/components/ATable';
    // import tableData from './data'
    import {getPriceList} from '@/api/index'
    export default {
        metaInfo() {
            return {
                title: 'BosuPost',
                meta: [
                    {
                        name: "keywords",
                        content: "运费价格"
                    },
                    {
                        name: "description",
                        content: "西马东马新加坡"
                    }
                ]
            };
        },
        components: {
            ATable
        },
        data() {
        //这里存放数据
            return {
                tableData:null,
                regionList: [
                    { name: '西马', engName: 'West Malaysia' },
                    { name: '东马', engName: 'East Malaysia' },
                    { name: '新加坡', engName: 'Singapore' }
                ],

            };
        },
        //监听属性 类似于data概念
        computed: {},
        //监控data中的数据变化
        watch: {},
        //方法集合
        methods: {
          getPriceList(){
            let self = this;
            getPriceList().then((res)=>{
                let data = res.obj
                if(res.success){
                    let priceList = [];
                    data.forEach((item,index) => {
                        let _obj =  {
                            priceType: 0,     // 0-kg 1-m³
                            transportType: 0,    // 0-空运  1-海运
                            price:[]
                        }
                        _obj.title = item.region +' '+ item.freight_type
                        _obj.id = item.id
                        _obj.region = ['西马','东马','新加坡'].indexOf(item.region)
                        _obj.range =[item.goodsFreightRegions[0].weight_section1,item.goodsFreightRegions[0].weight_section2,item.goodsFreightRegions[0].weight_section3] 
                        _obj.desc = item.remark
                        if(item.goodsFreightRegions){
                        item.goodsFreightRegions.forEach((gtem,index)=>{
                            let priceData = {}
                                priceData.companyList = gtem.delivery_company
                                priceData.per = [gtem.price_section1,gtem.price_section2,gtem.price_section3]
                                _obj.price.push(priceData)
                            })
                        }
                       priceList.push(_obj)
                     });
                     self.tableData = priceList
                }}).catch((response)=>{
                    console.log(response);
                })
            }
        },
        //生命周期 - 创建完成（可以访问当前this实例）
        created() {
        this.getPriceList()
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
    @import './sticky.less';
</style>