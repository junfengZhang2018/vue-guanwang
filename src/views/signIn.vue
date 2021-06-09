<template>
   <div class='signIn'>
        <div class="subhead-right">
            <a @click.prevent="$router.push('/signUp')" class="breadBtn breadBtn-primary">
                <span>账号注册</span>
            </a>
        </div>
        <div class="user-sign">
            <div class="quick-sign">
                <div class="user-sign-title">快速登录</div>
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
                        <div class="input-title">登录邮箱</div>
                        <input v-model="form.email" type="email" name="email" placeholder="请输入电子邮箱地址">
                    </label>
                </div>
                <div class="input-row">
                    <label class="input-label">
                        <div class="input-title">登录密码</div>
                        <input v-model="form.password" type="password" name="password" maxlength="32" placeholder="登录密码">
                    </label>
                </div>
                <div class="btn-submit">
                    <button class="btn breadBtn-primary" @click.prevent="signIn">登 录</button>
                </div>
                <div class="btn-submit">
                    <div class="tips">
                        <div class="flex-item">
                            <a @click="$router.push('/signUp')">没有账号？立即注册</a>
                        </div>
                        <div class="flex-item tr">
                            <a @click="$router.push('/forgetPassword')">忘记密码？</a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
   </div>
</template>

<script>
    import util from '@/util';
    import { mapMutations } from 'vuex';
    import { login } from '@/api/index'
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
                }, {
                    iconClass: 'icon-o-wechat',
                    name: 'wechat'
                }],
                form: {
                    email: '',
                    password: ''
                },
                rules: {
                    email: [
                        { required: true, message: '请输入电子邮箱地址' },
                        { pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, message: '电子邮箱输入错误' }
                    ],
                    password: [
                        { required: true, message: '请输入6位登录密码' },
                        { pattern: /.{6,32}/, message: '密码输入有误' }
                    ]
                }
            };
        },
        //监听属性 类似于data概念
        computed: {},
        //监控data中的数据变化
        watch: {},
        //方法集合
        methods: {
            ...mapMutations(['SET_USER_INFO','SET_USER_NAME']),
            signIn(){
                let errMsg = util.validate(this.form, this.rules);
            //   let _data ={
            //     email:this.form.email,
            //     password:this.form.password
            //   
                if(errMsg){
                    this.$dialog({
                        title: errMsg,
                        content: errMsg,
                    })
                }else{
                    // 登录
                    // const userName = '王多鱼';
                    // localStorage.setItem('user', userName);
                    // this.SET_USER_INFO(userName);
                    // this.$router.push('/my');
                    login(this.form).then(res =>{
                        console.log(res)
                        if(res.success){
                        localStorage.setItem('user', res.obj.user_name);
                        localStorage.setItem('token', res.obj.token);
                        localStorage.setItem('userData', res.obj);
                        this.SET_USER_INFO(res.obj);
                        this.SET_USER_NAME(res.obj.user_name)
                        this.$router.push('/my');
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
</style>
