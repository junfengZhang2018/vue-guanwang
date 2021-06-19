<template>
   <div class='memberCenter'>
        <div class="subhead-right">
            <a @click.prevent="$router.push('/')" class="breadBtn breadBtn-primary">
                <span>网站首页</span>
            </a>
        </div>
        <Search />
        <div class="card-wrap">
            <div class="card-body">
                <a class="item" @click="$router.push('/my/package')">
                    <div class="number">
                        <b>{{ordersCount}}</b>
                    </div>
                    <div class="title">我的包裹</div>
                </a>
                <a class="item" @click="$router.push('/my/wallet')">
                    <div class="number">
                        <b>￥0.00</b>
                    </div>
                    <div class="title">我的钱包</div>
                </a>
            </div>
        </div>
        <div class="card-wrap">
            <div class="card-body">
                <a class="item" v-for="(item, i) in stateList" :key="i" @click="$router.push(`/my/myWaybill?state=${item.state}`)">
                    <div class="icon" :class="item.icon"></div>
                    <div class="title">{{item.name}}</div>
                </a>
            </div>
        </div>
        <div class="card-wrap">
            <a class="cell" @click="$router.push('/my/warehouseAddress')">
                <div class="icon icon-warehouse md"></div>
                <div class="cell-content">
                    <div>仓库地址</div>
                    <!-- <div class="address">广东省/佛山市/南海区/狮山镇</div> -->
                     <div class="address">{{$store.state.userInfo.warehouse_address}}</div>
                </div>
                <div class="check cell-check text-primary right-icon">
                    查看
                </div>
            </a>
        </div>
        <div class="card-wrap">
            <a class="cell">
                <div class="icon icon-rate"></div>
                <div class="cell-content">
                    代付汇率
                </div>
                <div class="cell-check right-icon">
                    RM1 = ¥{{exchangeRate}}
                </div>
            </a>
        </div>
        <div class="card-wrap">
            <a class="cell" v-for="(item, i) in menuList" :key="i" @click="$router.push(item.url)">
                <div class="icon" :class="item.icon"></div>
                <div class="cell-content">
                    {{item.name}}
                </div>
                <div class="cell-check right-icon">
                    <span class="text-success" v-if="item.name === '我的账号'">请验证邮箱</span>
                </div>
            </a>
        </div>
   </div>
   
</template>

<script>
    import { mapGetters } from 'vuex'
    import Search from '@/components/Search'
    import {getMyOrdersCount} from '@/api/index'
    export default {
        metaInfo() {
            return {
                title: 'BosuPost',
                meta: [
                    {
                        name: "keywords",
                        content: "会员中心"
                    },
                    {
                        name: "description",
                        content: ""
                    }
                ]
            };
        },
        components: {
            Search
        },
        data() {
        //这里存放数据
            return {
                stateList: [
                    { name: '待收齐', icon: 'icon-receive', state: 'receive' },
                    { name: '待包装', icon: 'icon-package', state: 'package' },
                    { name: '待付款', icon: 'icon-payment', state: 'payment' },
                    { name: '运输中', icon: 'icon-transport', state: 'transport' },
                    { name: '已签收', icon: 'icon-delivery', state: 'delivery' }
                ],
                menuList: [
                    { name: '我的账号', icon: 'icon-profile', url: '/my/profile' },
                    { name: '优惠券码', icon: 'icon-coupon', url: '/my/coupon' },
                    { name: '我的积分', icon: 'icon-point', url: '/my/integral' },
                    { name: '消息通知', icon: 'icon-notification', url: '/my/notification' },
                    { name: '常用地址', icon: 'icon-location', url: '/my/address' }
                ],
                searchContent: '',
                ordersCount:0
            };
        },
        //监听属性 类似于data概念
        computed: {
            ...mapGetters(['exchangeRate'])
        },
        //监控data中的数据变化
        watch: {},
        created(){
            console.log('nbij')
          this.getMyOrdersCount()
        },
        mounted(){
            console.log('dhfjqpiwuewqhekjh');
        },
        //方法集合
        methods: {
            getMyOrdersCount(){
                console.log('asjhdkqhwjehqkw')
                let me = this;
                getMyOrdersCount().then(res =>{
                    console.log(res)
                    if(res.success){
                        // me.ordersCount = 
                    }
                })
            },
            getMyBillCount(){
                let me = this;
                getMyBillCount().then(res =>{
                    console.log(res)

                })
            }
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

<style lang="less" scoped>

</style>

