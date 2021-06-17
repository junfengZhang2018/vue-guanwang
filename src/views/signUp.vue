<template>
   <div class='signUp'>
        <div class="subhead-right">
            <a @click.prevent="$router.push('/signIn')" class="breadBtn breadBtn-primary">
                <span>用户登录</span>
            </a>
            <div class="user-sign">
                <div class="quick-sign">
                    <div class="user-sign-title">快速注册</div>
                    <div class="user-sign-way">
                        <div class="way-item" v-for="(item, index) in wayList" :key="index">
                            <div class="icon lg" :class="item.iconClass"></div>
                            <div class="sign-text">{{item.name}}</div>
                        </div>
                    </div>
                </div>
                <form action="" id="sign" class="sign-form" method="POST">
                    <div class="input-row">
                        <label class="input-label">
                            <div class="input-title">用户昵称</div>
                            <input v-model="form.name" autocomplete="off" type="name" maxlength="32" name="name" placeholder="请输入昵称">
                        </label>
                    </div>
                    <div class="input-row">
                        <label class="input-label">
                            <div class="input-title">注册邮箱</div>
                            <input v-model="form.email" type="email" name="email" placeholder="登录电子邮箱">
                        </label>
                    </div>
                    <div class="input-row">
                        <label class="input-label">
                            <div class="input-title">登录密码</div>
                            <input v-model="form.password" type="password" name="password" maxlength="32" placeholder="登录密码">
                        </label>
                    </div>
                    <div class="btn-submit">
                        <div class="flex-item">
                            <div class="input-checkbox">
                                <el-checkbox v-model="checked"></el-checkbox>
                                <span class="input-checked">
                                    已阅读并同意<a  style="text-decoration: underline">《服务条款》</a>
                                </span>
                            </div>
                        </div>
                        <button class="btn breadBtn-primary" @click.prevent="signUp">账号注册</button>
                    </div>
                    <div class="btn-submit">
                        <div class="tips">
                            <div class="flex-item">
                                <a @click="$router.push('/signIn')">已有账户？立即登录</a>
                            </div>
                            <div class="flex-item tr">
                                <a @click="$router.push('/forgetPassword')">忘记密码？</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
   </div>
</template>

<script>
    import util from '@/util';
    import {register} from '@/api/index'
    export default {
        components: {},
        data() {
        //这里存放数据
            return {
                wayList: [{
                    iconClass: 'icon-o-facebook',
                    name: 'facebook'
                }, {
                    iconClass: 'icon-o-google',
                    name: 'google'
                }],
                form: {
                    name: '',
                    email: '',
                    password: ''
                },
                rules: {
                    name: [
                        { required: true, message: '用户昵称不能为空' }
                    ],
                    email: [
                        { required: true, message: '电子邮箱地址不能为空' },
                        { pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, message: '电子邮箱输入错误' }
                    ],
                    password: [
                        { required: true, message: '密码不能为空' },
                        { pattern: /.{6,32}/, message: '密码输入有误' }
                    ]
                },
                checked: true
            };
        },
        //监听属性 类似于data概念
        computed: {},
        //监控data中的数据变化
        watch: {},
        //方法集合
        methods: {
            signUp(){
                let errMsg = util.validate(this.form, this.rules);
                if(errMsg){
                    this.$dialog({
                        title: errMsg,
                        content: errMsg
                    })
                }else{
                    if(!this.checked){
                        this.$dialog({
                            title: '提示',
                            content: '请确认已阅读并同意《服务条款》'
                        })
                        return;
                    }
                    register(this.form).then(res =>{
                        console.log(res)
                        if(res.success){
                          this.$dialog({
                            title: '注册成功',
                            content: '欢迎使用BosuPost',
                            onConfirm: () => {
                                this.$router.push('/signIn');
                            }
                          })
                        }
                     
                    })
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
    @import '../assets/style/sign.less';
    .input-checkbox{
        padding: 8px 10px 8px 0;
        line-height: 20px;
        /deep/.el-checkbox__inner{
            width: 16px;
            height: 16px;
            &:after{
                left: 5px;
                top: 2px;
            }
        }
    }
</style>