<template>
    <div class="warehouseAddress">
        <div class="colorTips colorTips-success">
            <div class="colorTips-title">请复制文本粘贴收货信息</div>
            <div class="colorTips-content">尽量避免手动输入拼写错误</div>
        </div>
        <div class="card-wrap">
            <div class="cell" v-for="(item, index) in propList" :key="index">
                <div class="cell-content">
                    <p class="prop">{{item.prop}}</p>
                    <p class="value">{{item.value}}</p>
                </div>
                <div class="cell-check">
                    <a v-clipboard:copy="item.value" v-clipboard:success="copySuccess" class="btn btn-primary">复制</a>
                </div>
            </div>
        </div>
        <div class="card-wrap">
            <div class="card-box">
                <ul>
                    <li class="text-warning">系统自动入库，免填单号</li>
                    <li>收件人及地址中包含6位数字为系统为您的分配的 ID，用于系统为您添加包裹实现自动入库</li>
                    <li>仓库配备叉车等工具免费主动卸货，若发货方额外<strong class="text-danger">向您收取 “入仓费” 则为欺诈</strong></li>
                    <li>大件货物手写唛头可以填写 <strong class="text-success">ML425443</strong></li>
                    <li>通常无须填写 “邮政编码(Postal Code)”，若需填写请输入 <u>528225</u></li>
                    <li>发货方或商家要求实名寄件可填写您的 “中文名字”</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                propList: [
                    { prop: '收件姓名', value: 'ML425443'},
                    { prop: '联系电话', value: '13243839708'},
                    { prop: '所在地区', value: '广东省/佛山市/南海区/狮山镇'},
                    { prop: '详细地址', value: '鑫玖电创园B2号ML425443#TBJTTC'},
                ]
            }
        },
        methods: {
            copySuccess(){
                this.$message.success("复制成功");
            }
        }
    }
</script>

<style lang="less" scoped>
    .warehouseAddress{
        .prop{
            font-size: 14px;
            color: #888;
        }
        .value{
            margin-top: 6px;
        }
        .cell-check{
            padding: initial;
            .btn{
                font-size: 14px;
                line-height: 18px;
                padding: 3px 6px;
            }
        }
        .card-box{
            padding: 8px 12px;
            ul{
                list-style: square;
                font-size: 14px;
                line-height: 18px;
                margin: 0;
                padding: 0;
                margin-left: 16px;
                li+li{
                    margin-top: 6px;
                }
            }
        }
    }
</style>