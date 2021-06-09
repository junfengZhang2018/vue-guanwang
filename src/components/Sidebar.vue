<template>
    <div class="side hidden-xs-only">
        <div class="panel">
            <div class="panel-hd">
                <div class="panel-title">
                    <div>
                        {{sayHello}}，
                        <template v-if="!$store.state.userInfo">请 <a @click.prevent="$router.push('/signIn')" class="text-link">登录/注册</a></template>
                        <template v-else><a @click.prevent="$router.push('/my')" class="text-link">{{$store.state.userName}}</a></template>
                    </div>
                </div>
            </div>
            <div class="m-cells">
                <a href="" class="cell access">
                    <div class="icon icon-rate"></div>
                    <div class="cell-bd">代付汇率</div>
                    <div class="cell-ft">RM1 = ¥{{exchangeRate}}</div>
                </a>
            </div>
        </div>
        <div class="card">
            <div class="body">
                <template v-if="$route.name === 'freightPrice' || $route.name === 'helpCenter'">
                    <router-link to="/freightPrice" class="item">
                        <div class="icon icon-card-pricing md"></div>
                        <div class="title">运费价格</div>
                    </router-link>
                    <router-link to="/helpCenter" class="item">
                        <div class="icon icon-card-helper md"></div>
                        <div class="title">帮助中心</div>
                    </router-link>
                </template>
                <template v-else>
                    <router-link to="/signIn" class="item">
                        <div class="icon icon-card-pricing md"></div>
                        <div class="title">账号登录</div>
                    </router-link>
                    <router-link to="/signUp" class="item">
                        <div class="icon icon-card-helper md"></div>
                        <div class="title">立即注册</div>
                    </router-link>
                </template>
            </div>
        </div>
        <template v-if="levelList.find(item => item.path === '/my') && $route.name !== 'memberCenter'">
            <div class="panel">
                <div class="panel-menu">
                    <div class="menuList">   
                        <router-link class="routerLink" :to="item.url" v-for="(item, i) in menuList" :key="i">
                            <div class="list-item flex">
                                <div class="icon" :class="item.icon"></div>
                                <div class="mlist-bd">{{item.title}}</div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="panel">
                <div class="panel-menu">
                    <div class="menuList">
                        <a class="routerLink" v-for="(item, i) in stateList" :key="i" @click="$router.push(`/my/myWaybill?state=${item.state}`)">
                            <div class="list-item flex">
                                <div class="icon" :class="item.icon"></div>
                                <div class="mlist-bd">{{item.title}}</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="panel">
                <div class="panel-hd">
                    <div class="panel-title">
                        <div class="icon icon-transport"></div>
                        <strong>运输服务</strong>
                    </div>
                </div>
                <div class="panel-menu">
                    <div class="menuList">
                        <router-link class="routerLink" :to="item.url" v-for="(item, i) in serviceList" :key="i">
                            <div class="list-item">
                                <div class="mlist-bd">{{item.title}}</div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="panel">
                <div class="panel-hd">
                    <div class="panel-title">
                        <div class="icon icon-box"></div>
                        <strong>包裹说明</strong>
                    </div>
                </div>
                <div class="panel-menu">
                    <div class="menuList">
                        <router-link class="routerLink" :to="item.url" v-for="(item, i) in pkgList" :key="i">
                            <div class="list-item">
                                <div class="mlist-bd" @click.prevent="$router.push(item.url)">{{item.title}}</div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                serviceList: [{
                    title: '自动入库',
                    url: '/automaticStorage'
                }, {
                    title: '仓库地址',
                    url: '/warehouseAddress'
                }, {
                    title: '增值服务',
                    url: '/addedServices'
                }, {
                    title: '赔偿说明',
                    url: '/compensateExplain'
                }, {
                    title: '免抛半抛全抛',
                    url: '/halfFullNoThrow'
                }, {
                    title: '货物运输建议',
                    url: '/cargoTransportAdvice'
                }],
                pkgList: [{
                    title: '敏感货物',
                    url: '/sensitiveGoods'
                }, {
                    title: '禁运物品',
                    url: '/prohibitedGoods'
                }, {
                    title: '普货敏感货分辨',
                    url: '/distinguishGoods'
                }],
                menuList: [{
                    title: '我的账号',
                    icon: 'icon-profile',
                    url: '/my/profile'
                }, {
                    title: '优惠券码',
                    icon: 'icon-coupon',
                    url: '/my/coupon'
                }, {
                    title: '我的积分',
                    icon: 'icon-point',
                    url: '/my/integral'
                }, {
                    title: '消息通知',
                    icon: 'icon-notification',
                    url: '/my/notification'
                }, {
                    title: '常用地址',
                    icon: 'icon-location',
                    url: '/my/address'
                }],
                stateList: [
                    { title: '待收齐', icon: 'icon-receive', state: 'receive' },
                    { title: '待包装', icon: 'icon-package', state: 'package' },
                    { title: '待付款', icon: 'icon-payment', state: 'payment' },
                    { title: '运输中', icon: 'icon-transport', state: 'transport' },
                    { title: '已签收', icon: 'icon-delivery', state: 'delivery' }
                ]
            }
        },
        computed: {
            ...mapGetters(['exchangeRate', 'levelList'])
        },
        methods: {
            initDate() {
                let hour = new Date().getHours();
                if (0 <= hour && hour <= 6) this.sayHello = '凌晨好';
                if (7 <= hour && hour <= 11) this.sayHello = '早上好';
                if (12 <= hour && hour <= 13) this.sayHello = '中午好';
                if (14 <= hour && hour <= 18) this.sayHello = '下午好';
                if (19 <= hour && hour <= 23) this.sayHello = '晚上好';
            },
        },
        created(){
            this.initDate();
        }
    }
</script>

<style lang="less" scoped>
    .side{
        position: relative;
        width: 250px;
        margin-right: 20px;
        >div{
            background-color: #fff;
        }
        .flex{
            align-items: center;
        }
        .icon{
            margin-right: 8px;
        }
        .panel{
            .panel-hd{
                .panel-title{
                    display: flex;
                    align-items: center;
                    font-size: 17px;
                    line-height: 24px;
                    min-height: 32px;
                    strong{
                        transform: translateY(2px);
                    }
                }
            }
            .panel-menu{
                .router-link-active{
                    .list-item{
                        color: #007fff;
                        background-color: #fafcff;
                    }
                }
                .menuList{
                    .routerLink:first-child{
                        .list-item{
                            border-top: none;
                        }
                    }
                    .list-item{
                        cursor: pointer;
                        line-height: 1.4;
                        padding: 12px;
                        border-top: 1px dashed #eeeeee;
                    }
                }
            }
            .m-cells{
                .cell{
                    display: flex;
                    align-items: center;
                    padding: 12px;
                    .icon{
                        margin-right: 6px;
                    }
                    .cell-bd{
                        flex: 1;
                    }
                    .cell-ft{
                        padding-right: 12px;
                        position: relative;
                        &:after{
                            content: '';
                            position: absolute;
                            right: 0px;
                            top: 58%;
                            width: 10px;
                            height: 10px;
                            margin-top: -8px;
                            transform: rotate(45deg);
                            border-right: 1px solid #333;
                            border-top: 1px solid #333;
                        }
                    }
                }
            }
        }
        .card{
            border: 1px solid #eee;
            .body{
                display: flex;
                flex: 1;
            }
            .item{
                flex: 1;
                text-align: center;
                padding: 12px 0;
                position: relative;
                border-left: 1px solid #eee;
                &:first-child{
                    border-left: none;
                }
                .icon{
                    margin: 0 auto;
                    &+.title{
                        margin-top: 6px;
                        font-size: 14px;
                    }
                }
            }
            .router-link-active{
                .title{
                    color: #007fff;
                }
            }
        }
    }
</style>