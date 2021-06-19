<template>
    <div class='deposit'>
        <a @click.prevent="$router.push('/help/deposit')" class="breadBtn breadBtn-success">
            <span>如何充值?</span>
        </a>
       <div class="colorTips colorTips-primary">
            <div class="colorTips-title">如需要代付服务，请联系在线客服</div>
        </div>
        <div class="panel">
            <div class="panel-hd">
                <b>一、马令吉(MYR)转账充值</b>
            </div>
            <div class="panel-bd">
                <div class="remark text-success">马币转账请备注您的ID <b class="text-primary">{{$store.state.userInfo.warehouse_code.slice(2)}}</b> 即可自动到账</div>
                <div class="value">
                    银行：CIMB<b class="text-warning">（汇率 {{exchangeRate}}）</b>
                </div>
                <div class="value">
                    账号：8010580955
                </div>
                <div class="value">
                    账户：BosuPost Trading
                </div>
            </div>
        </div>
        <div class="panel">
            <div class="panel-hd">
                <b>二、马令吉(MYR)淘宝充值</b>
            </div>
            <div class="panel-bd">
                <div class="remark text-success">淘宝提交订单选择Bosu仓库地址作为收货地址；</div>
                <a class="btn btn-primary-full">
                    <div class="icon icon-taobao"></div>
                    <strong>打开淘宝充值</strong>
                </a>
                <ul class="ul">
                    <li>
                        1. 若无仓库地址请备注您的ID <strong class="text-primary">{{$store.state.userInfo.warehouse_code.slice(2)}}</strong> 即可自动到账;
                    </li>
                    <li>2. 支持 Online Banking, Credit Card；</li>
                    <li>3. 充值金额按照淘宝实时汇率折算为 RMB；</li>
                    <li>4. 如需帮助请<span class="link" @click="$router.push()">联系客服</span></li>
                </ul>
            </div>
        </div>
        <div class="panel">
            <div class="panel-hd">
                <b>三、人民币(CNY)在线充值</b>
            </div>
            <div class="panel-bd">
                <div class="remark text-success">支持RMB在线付款，立即到账无须等待</div>
                <input class="input" ref="input" v-model="form.amount" type="tel" maxlength="5" placeholder="请输入充值金额 (RMB)" style="padding: 16px 8px">
                <div class="flex">
                    <a @click.prevent="pay('alipay')" class="btn btn-primary-full">
                        <div class="icon icon-alipay"></div>
                        <strong>支付宝</strong>
                    </a>
                    <a @click.prevent="pay('wechatpay')" class="btn btn-success-full">
                        <div class="icon icon-wechatpay"></div>
                        <strong>微信支付</strong>
                    </a>
                    <a @click.prevent="pay('friendpay')" class="btn btn-warning-full">
                        <div class="icon icon-friendpay"></div>
                        <strong>好友代付</strong>
                    </a>
                </div>
            </div>
        </div>
        <Dialog :visible.sync="visible" v-bind="dialogProp">
            <div class="input-group flex">
                <input class="input" v-model="link" disabled>
                <button class="btn btn-link" v-clipboard:copy="link" v-clipboard:success="copySuccess">复制代付链接</button>
            </div>
            <div class="qrcode">
                <img src="@/assets/images/logo.png" alt="">
            </div>
            <div class="desc text-warning">
                将 “代付链接” 或 “代付卡图片” 发送给好友，完成支付余额立即到账
            </div>
        </Dialog>
   </div>
</template>

<script>
    import util from '@/util';
    import { mapGetters } from 'vuex'

    export default {
        components: {},
        data() {
        //这里存放数据
            return {
                form: {
                    amount: ''
                },
                rules: {
                    amount: [
                        { pattern: /^(10000|[1-9]\d{0,3})$/, message: '充值金额为1~10000的整数' }
                    ]
                },
                dialogProp: {
                    title: '复制代付链接或代付卡',
                    btnText: '如何代付?',
                    cancelText: '取消',
                    onConfirm: () => {
                        this.$router.push('/');
                    }
                },
                visible: false,
                link: '1212312'
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
            copySuccess(){
                this.$message.success("复制成功");
            },
            pay(type){
                let errMsg = util.validate(this.form, this.rules);
                if(errMsg){
                    this.$dialog({
                        title: '金额输入有误',
                        content: errMsg,
                        onConfirm: () => {
                            this.$refs.input.focus();
                        }
                    })
                }else{
                    switch (type) {
                        case 'alipay':
                            this.$dialog({
                                title: '申请已经提交',
                                content: '点击支付付款',
                                btnText: '取消',
                                cancelText: '去支付',
                                cancelButtonClass: 'text-success',
                                closeWhenCancel: false,
                                onCancel: () => {
                                    console.log("打开支付宝支付页面");
                                }
                            })
                            break;
                        case 'wechatpay':
                            this.$dialog({
                                title: '微信「扫一扫」完成支付',
                                content: '余额充值：￥222.0',
                                btnText: '取消',
                                imgUrl: require("@/assets/images/logo.png"),
                                contentClass: "text-success fwb"
                            })
                            break;
                        case 'friendpay':
                            this.visible = true;
                            break;
                        default:
                            break;
                    }
                }
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
<style lang='less' scoped>
    .deposit{
        line-height: 1.625;
        .breadBtn-success{
            background-color: initial;
            border: initial;
            color: #007fff;
        }
        .remark{
            font-size: 14px;
            margin-bottom: 8px;
        }
        .ul{
            padding: 12px 0;
            font-size: 14px;
            color: #777;
            .link{
                color: #007fff;
                text-decoration: underline;
                cursor: pointer;
            }
        }
        .panel-bd{
            .input{
                margin-bottom: 12px;
            }
        }
        .flex a{
            margin-right: 12px;
        }
        .input-group{
            border: 1px solid #eeeeee;
            border-radius: 4px;
            > .input{
                border: none;
            }
            .btn{
                border: none;
                border-radius: 0;
                border-left: 1px solid #eeeeee;
            }
            .btn-link {
                color: #007fff;
                border-color: rgba(0, 0, 0, 0);
                padding-left: 0;
                padding-right: 0;
                &:hover{
                    text-decoration: underline;
                    cursor: pointer;
                }
            }
        }
        .qrcode{
            img{
                width: 250px;
                height: 320px;
                display: block;
                margin: 20px auto;
                border: 4px solid rgb(0, 127, 255);
                border-radius: 4px;
            }
        }
        .desc{
            font-size: 14px;
        }
    }
</style>