<template>
   <div class='calculation'>
        <div class="subhead-right">
            <a @click.prevent="$router.push('/freightPrice')" class="breadBtn breadBtn-primary">
            <div class="icon icon-balance"></div>
                <span>运价表格</span>
            </a>
            <div class="panel">
                <div class="panel-wrap">
                    <div class="input-wrap">
                        <div class="input-name">
                            <strong>货运地区：</strong>
                            <!-- <el-radio-group v-model="form.region"> -->
                                <el-radio >
                                    <div>
                                      asdadasdasdadsad
                                    </div>
                                </el-radio>
                            <!-- </el-radio-group> -->
                        </div>
                    </div>
                    <div class="input-wrap">
                        <div class="input-name">
                            <strong>运输渠道：</strong>
                            <el-radio-group v-model="form.channel">
                                <el-radio :label="item.id" v-for="(item, i) in channelList" :key="i">{{item.value}}</el-radio>
                            </el-radio-group>
                        </div>
                    </div>
                    <div class="input-wrap" style="margin-top: 10px">
                        <div class="param">
                            <div class="param-item">
                                <div class="label-head">重量 kg</div>
                                <input v-model="form.weight" type="tel" autocomplete="off" class="tc input" maxlength="4" placeholder="-">
                            </div>
                            <div class="param-div"></div>
                            <div class="param-item">
                                <div class="label-head">长度 cm</div>
                                <input v-model="form.length" type="tel" autocomplete="off" class="tc input" maxlength="4" placeholder="-">
                            </div>
                            <div class="param-div"></div>
                            <div class="param-item">
                                <div class="label-head">宽度 cm</div>
                                <input v-model="form.width" type="tel" autocomplete="off" class="tc input" maxlength="4" placeholder="-">
                            </div>
                            <div class="param-div"></div>
                            <div class="param-item">
                                <div class="label-head">高度 cm</div>
                                <input v-model="form.height" type="tel" autocomplete="off" class="tc input" maxlength="4" placeholder="-">
                            </div>
                        </div>
                    </div>
                    <div class="input-wrap" style="margin-top: 16px">
                        <div class="param fee">
                            <a @click.prevent="calculate" class="btn breadBtn-success">
                                <div class="icon icon-calculator"></div>
                                <span>计算运费</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <template v-if="resList.length">
                <div class="top">
                    <div class="tab-nav">
                        <div class="nav-item tc" v-for="(item, i) in paramList" :key="i">
                            <a>
                                <div class="desc">{{item.name}}</div>
                                <div class="number">{{item.unit}}{{item.type ? 'm³' : 'kg'}}</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="panel">
                    <div class="panel-hd">
                        <strong class="text-primary">海运渠道（{{resList.length}}）</strong>
                    </div>
                    <div class="items">
                        <div class="item">
                            <div class="left tc">
                                <div class="amount">
                                    <strong>¥30</strong>
                                </div>
                                <div class="estimated">3~7工作天</div>
                            </div>
                            <div class="right">
                                <div class="channel">
                                    <div class="channel-name">西马 普货空运</div>
                                    <div class="channel-company">Skynet，ABX</div>
                                </div>
                                <div class="weight">
                                    <span>计费重量：</span>
                                    <strong>1kg</strong>
                                    <span>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
                                    <a class="text-success">
                                        <strong>免抛</strong>
                                    </a>
                                    <a class="text-danger">
                                        <strong>全抛</strong>
                                    </a>
                                </div>
                                <div class="warning">
                                    全抛计费需输入尺寸才能准确预算
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel">
                    <div class="panel-hd">
                        <strong class="text-primary">空运敏感货提醒</strong>
                    </div>
                    <div class="panel-ft">
                        <ul>
                            <li>空运货物请注意区别普货敏感</li>
                            <li>
                                查看
                                <a class="text-link">敏感货介绍</a>、<a class="text-link">违禁品介绍</a>
                            </li>
                            <li>纯电池、充电宝、香水、指甲油不能空运，请使用海运小包渠道运输</li>
                        </ul>
                    </div>
                </div>
                <div class="panel">
                    <div class="panel-hd">
                        <strong class="text-primary">海运费用：¥16</strong>
                    </div>
                    <div class="panel-ft">
                        <ul>
                            <li class="text-success">仓库会根据货物重量及尺寸帮您更换划算渠道</li>
                            <li><b>“海运小包”</b> 按照重量计费，适合运输小包裹</li>
                            <li><b>“海运大货”</b> 按照体积计费，适合运输较大货</li>
                        </ul>
                    </div>
                </div>
            </template>
            <Default v-else>输入重量，尺寸即可准确预算运费</Default>
        </div>
   </div>
</template>

<script>
   import { mapGetters } from "vuex";;

    export default {
        components: {},
        data() {
        //这里存放数据
            return {
                form: {
                    region: 0,
                    channel: 0,
                    weight: '',
                    length: '',
                    width: '',
                    height: ''
                },
                channelList: [
                    { id: 0, value: '空运'},
                    { id: 1, value: '海运'},
                ],
                paramList: [
                    { name: '实际重量', unit: 1, type: 0 },
                    { name: '体积重量', unit: 0, type: 0 },
                    { name: '体积', unit: 0, type: 1 },
                ],
                resList: []
            };
        },
        //监听属性 类似于data概念
        computed: {
            ...mapGetters(['regionList'])
        },
        //监控data中的数据变化
        watch: {},
        //方法集合
        methods: {
            calculate(){
                this.resList.push(1);
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
    @import './sticky.less';
    .panel{
        .panel-wrap{
            padding: 8px 12px;
            .input-wrap{
                display: flex;
                align-items: center;
                width: 100%;
                height: 36px;
                .input-name{
                    margin-bottom: 0;
                    font-size: 16px;
                    color: #000000;
                }
                @media screen and (max-width: 768px) {
                    .fee{
                        width: 100%;
                        .btn{
                            padding: 8px 12px;
                        }
                    }
                }
                .param{
                    display: flex;
                    .param-item{
                        flex: 1;
                        .label-head{
                            text-align: center;
                            font-size: 13px;
                            line-height: 16px;
                            border: 1px solid #f2f2f2;
                            background-color: #ffffff;
                            border-radius: 4px 4px 0 0;
                            color: #007fff;
                        }
                        .input{
                            background-color: #fff;
                            border-radius: 0 0 4px 4px;
                            padding: 6px 8px;
                            margin: 0;
                            border: 1px solid #ebebeb;
                            border-top: none;
                            outline: none;
                            resize: none;
                            font-size: 16px;
                            line-height: 20px;
                            vertical-align: middle;
                            width: 100%;
                            box-sizing: border-box
                        }
                    }
                    .param-div{
                        width: 12px;
                        height: 12px;
                    }
                    .btn{
                        color: #fff;
                        width: 100%;
                    }
                }
            }
        }
        .panel-hd{
            display: flex;
            align-items: center;
            padding: 0px 12px;
            min-height: 44px;
        }
        .items{
            .item{
                padding: 12px 0;
                display: flex;
                align-items: center;
                background-color: #ffffff;
                border-top: 1px solid #f2f2f2;
                .left{
                    min-width: 100px;
                    .amount{
                        font-size: 18px;
                        line-height: 24px;
                        margin-bottom: 4px;
                    }
                    .estimated{
                        font-size: 12px;
                        color: #999999;
                    }
                }
                .right{
                    flex: 1;
                    .channel{
                        .channel-name{
                            font-weight: bold;
                            font-size: 16px;
                            line-height: 20px;
                            margin-bottom: 4px;
                        }
                        .channel-company{
                            font-size: 14px;
                            line-height: 20px;
                        }
                    }
                    .weight{
                        font-size: 14px;
                        line-height: 20px;
                        margin-top: 4px;
                        .text-success,.text-danger{
                            &:after{
                                content: ' ? ';
                                font-size: 12px;
                                color: #007fff;
                                position: relative;
                                top: -4px;
                                left: 2px;
                                text-decoration: underline;
                                text-decoration-style: dotted;
                                text-decoration-color: #007fff;
                                text-decoration-thickness: 1px;
                            }
                            &:hover{
                                color: #007fff;
                                text-decoration: underline;
                                text-decoration-style: dotted;
                            }
                        }
                    }
                    .warning{
                        margin-top: 4px;
                        font-size: 14px;
                        line-height: 18px;
                        color: #d46419;
                    }
                }
            }
        }
        .panel-ft{
            border-top: 1px solid #eee;
            display: flex;
            align-items: center;
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