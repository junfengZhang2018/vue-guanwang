<template>
   <div class='freightDetail'>
       <a-table :showLink="false" :data="data" v-for="(data, i) in tableData" :key="i" />
       <b-table :data="data" v-for="(data, i) in tableData" :key="i" />
   </div>
</template>

<script>
    import ATable from '@/components/ATable';
    import BTable from '@/components/BTable';

    export default {
        components: {
            ATable, BTable
        },
        data() {
        //这里存放数据
            return {
                tableData:null
            };
        },
        //监听属性 类似于data概念
        computed: {},
        //监控data中的数据变化
        watch: {},
        //方法集合
        methods: {
          getPriceDetail(){
            let _data = {
                goodRegionId:1
            }
            getPriceDetail(_data).then((response)=>{
              let {data} = response
              console.log(data)
              let priceList = [];
              data.forEach((item,index) => { 
              let _obj =  {
                  priceType: 0,     // 0-kg 1-m³
                  transportType: 0,    // 0-空运  1-海运
                  price:[]
              }
              _obj.title = item.region +' '+ item.freight_type
              _obj.index = index
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
              this.tableData = priceList
            }).catch((response)=>{
              console.log(response);
            })
          },
           getPriceList(){
            let self = this;
             getPriceList().then((response)=>{
               let {data} = response
               console.log(data)
               let priceList = [];
               data.forEach((item,index) => {
                let _obj =  {
                    priceType: 0,     // 0-kg 1-m³
                    transportType: 0,    // 0-空运  1-海运
                    price:[]
                }
                _obj.title = item.region +' '+ item.freight_type
                _obj.index = index
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
                  let { id } = this.$route.params;
                 console.log(id)
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

              console.log(priceList)
              }).catch((response)=>{
                console.log(response);
              })
          }
        },
        //生命周期 - 创建完成（可以访问当前this实例）
        created() {
            scrollTo(0, 0);
            this.getPriceDetail()
            this.getPriceList()
            // let { id } = this.$route.params;
            // this.tableData = this.tableData[Number(id)];
            // let tableData = [];
            // let price = this.tableData.price;
            // price.forEach((item, i) => {
            //     tableData.push({
            //         ...this.tableData,
            //         price: [item]
            //     });
            // });
            // this.tableData = tableData;

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