<template>
    <div class="wrapper">
        <!-- header开始 -->
        <div id="header" class="hidden-xs-only">
            <!-- 导航栏 -->
            <div id="nav" class="container">
                <!-- 公司logo -->
                <h1>
                    <a href="https://www.qjtco.com/">
                        <img src="@/assets/images/logo.png" alt="" />
                    </a>
                </h1>
                <!-- 导航栏列表 -->
                <ul>
                    <li v-for="(item, i) in titleList" :key="i">
                        <router-link :to="item.url">{{
                            item.title
                        }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div id="m-nav" class="hidden-sm-and-up">
            <div class="m-header-inner">
                <div class="m-header-bar" v-if="$route.name === 'Home'">
                    <div class="headleft">
                        <a
                            @click.prevent="$router.push('/signUp')"
                            class="btn btn-success"
                            >立即注册</a
                        >
                    </div>
                    <div class="headright">
                        <a
                            @click.prevent="$router.push('/signIn')"
                            class="btn btn-primary-fill"
                            >账户登录</a
                        >
                    </div>
                </div>
				<div class="m-header-bar" v-else>
                    <div class="headleft">
                        <a
                            v-if="$route.name === 'memberCenter'"
                            class="idnum"
                            ><b class="text-primary">ID：425443</b></a
                        >
                        <a
                            v-else-if="levelList.find(item => item.path === '/my') && $route.name !== 'memberCenter'"
                            @click.prevent="$router.push('/my')"
                            class="btn btn-back"
                            >会员中心</a
                        >
                        <a
                            v-else
                            @click.prevent="$router.push('/')"
                            class="btn btn-back"
                            >MuluPost</a
                        >
                    </div>
                </div>
            </div>
        </div>
        <!-- header结束 -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: ["contacts"],
    watch: {
        $route(val){
            console.log(val);
        }
    },
    computed: {
        ...mapGetters(['levelList'])
    },
    data() {
        return {
            contactWay: {
                // 网站顶部邮箱
                email: "qjtcoonline@163.com",
                // 网站顶部电话
                tel: "15241794625",
            },
            titleList: [
                {
                    title: "首页",
                    url: "/",
                },
                {
                    title: "运费价格",
                    url: "/freightPrice",
                },
                {
                    title: "帮助中心",
                    url: "/helpCenter",
                },
                {
                    title: "如何代运",
                    url: "/howToForwarding",
                },
                {
                    title: "登录/注册",
                    url: "/signIn",
                },
            ],
        };
    },
    methods: {

    },
    created() {
        // 将父组件props传递过来的值赋给data中contactWay
        this.contactWay = this.contacts;
    },
};
</script>
<style lang="less" scoped>
.wrapper {
    background-color: #fff;
    #header {
        // 顶部email和phone
        position: relative;
        z-index: 999;
        height: 48px;
        padding: 12px 0;
        border-bottom: 1px solid #eeeeee;
        box-shadow: 0 0 6px #eeeeee;
        // 顶部导航栏及LOGO样式
        #nav {
            display: flex;
            justify-content: space-between;
            height: 48px;
            margin: 0 auto;
            position: relative;
            z-index: 999;
            // LOGO
            h1 {
                float: left;
                img {
                    width: 180px;
                    height: 48px;
                    margin-right: 30px;
                }
            }
            // 导航栏
            > ul {
                > li {
                    float: left;
                    margin-left: 8px;
                    a {
                        padding: 6px 8px;
                        height: 40px;
                        line-height: 40px;
                        color: #000000;
                    }
                    // 根据路有变化改变导航样式
                    .router-link-exact-active {
                        color: #007fff;
                        text-decoration: underline;
                    }
                    .active {
                        background: #0092ff;
                        border-radius: 50px;
                        color: #ffffff;
                    }
                }
            }
        }
    }
    #m-nav {
        height: 60px;
        .m-header-inner {
            position: fixed;
            background-color: #ffffff;
            z-index: 99;
            left: 0;
            right: 0;
            top: 0;
            .m-header-bar {
                display: flex;
                align-items: center;
                height: 60px;
                .headleft {
                    flex: 1;
                    display: flex;
                    justify-content: flex-start;
                    .idnum{
                        margin-left: 10px;
                    }
                    .btn {
                        margin-left: 12px;
                    }
                    .btn-success {
                        background-color: #ffffff;
                        color: #059603;
                        border: 1px solid #059603;
                    }
                    .btn-back{
                        color: #000;
                        position: relative;
                        padding-left: 18px;
                        padding-right: 0;
                        font-weight: bold;
                        &:before{
                            content: '';
                            border-top: 2px solid #333;
                            border-radius: 1px 0 0 1px;
                            width: 14px;
                            position: absolute;
                            left: 0px;
                            top: 50%;
                            margin-top: -1px;
                        }
                        &:after{
                            content: '';
                            border-left: 2px solid #333;
                            border-top: 2px solid #333;
                            width: 10px;
                            height: 10px;
                            position: absolute;
                            left: 0px;
                            top: 50%;
                            transform: rotate(-45deg);
                            margin-top: -6px;
                        }
                    }
                }
                .headright {
                    flex: 1;
                    display: flex;
                    justify-content: flex-end;
                    .btn {
                        margin-right: 12px;
                    }
                    .btn-primary-fill {
                        color: #fff;
                        background-color: #198cff;
                        border: 1px solid #007fff;
                    }
                }
            }
        }
    }
}
</style>