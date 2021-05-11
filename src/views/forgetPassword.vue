<template>
   <div class='forgetPassword'>
        <div class="subhead-right">
            <div class="user-sign">
                <div class="quick-sign">
                    <div class="user-sign-title">输入邮箱，重置密码</div>
                </div>
                <form action="" id="sign" class="sign-form" method="POST">
                    <div class="input-row">
                        <label class="input-label">
                            <div class="input-title">注册邮箱</div>
                            <input v-model="form.email" type="email" name="email" placeholder="登录电子邮箱">
                        </label>
                    </div>
                    <!-- <div class="input-row">
                        <label class="input-label">
                            <div class="input-title">登录密码</div>
                            <input v-model="form.password" type="password" name="password" maxlength="32" placeholder="登录密码">
                        </label>
                    </div> -->
                    <div class="btn-submit">
                        <button class="btn breadBtn-primary" @click.prevent="">下一步</button>
                    </div>
                    <div class="btn-submit">
                        <div class="tips">
                            <div class="flex-item">
                                <a @click="$router.push('/signIn')">已有账户？立即登录</a>
                            </div>
                            <div class="flex-item tr">
                                <a @click="$router.push('/signUp')">账号注册</a>
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

    export default {
        components: {},
        data() {
        //这里存放数据
            return {
                form: {
                    email: '',
                    // password: ''
                },
                rules: {
                    email: [
                        { required: true, message: '电子邮箱地址不能为空' },
                        { pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, message: '电子邮箱输入错误' }
                    ],
                    // password: [
                    //     { required: true, message: '密码不能为空' },
                    //     { pattern: /.{6,32}/, message: '密码输入有误' }
                    // ]
                }
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
                        content: errMsg,
                    })
                }else{
                    // 注册
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