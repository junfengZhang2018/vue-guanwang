<template>
   <div class='breadcrumb hidden-xs-only'>
       <div class="subhead-left">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item v-for="item in levelList" :key="item.path">
                    <span class="item" @click="handleLink(item)">{{ item.meta.title }}</span>
                </el-breadcrumb-item>
            </el-breadcrumb>
       </div>
   </div>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        components: {},
        data() {
        //这里存放数据
            return {
                levelList: []
            };
        },
        //监听属性 类似于data概念
        computed: {},
        //监控data中的数据变化
        watch: {
            $route() {
                this.getBreadcrumb();
            }
        },
        //方法集合
        methods: {
            ...mapMutations(['SET_LEVEL_LIST']),
            getBreadcrumb() {
                let matched = this.$route.matched.filter(item => item.meta && item.meta.title);
                this.levelList = [{ path: '/', meta: { title: '网站首页' }}].concat(matched);
                this.levelList.forEach(item => {
                    item.params = this.$route.params;
                    item?.regex?.keys.forEach(val => {
                        item.path = item.path.replace(new RegExp(`:${val.name}`), item.params[val.name])
                    })
                })
                this.SET_LEVEL_LIST(this.levelList);
            },
            handleLink(item) {
                const { redirect, path } = item;
                if (redirect) {
                    this.$router.push(redirect);
                    return;
                }
                if(item.name === this.$route.name) return;
                this.$router.push({path, params: item.params});
            },
        },
        //生命周期 - 创建完成（可以访问当前this实例）
        created() {
            this.getBreadcrumb();
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
    .breadcrumb{
        height: 44px;
        display: flex;
        align-items: center;
        margin: 8px auto;
        border-bottom: 1px solid #eeeeee;
        /deep/.el-breadcrumb__item{
            font-size: 16px;
            .el-breadcrumb__inner{
                color: #007fff; 
            }
            .item{
                cursor: pointer;
            }
            &:last-child{
                .el-breadcrumb__inner{
                    color: #333; 
                }
                .item{
                    cursor: initial;
                }
            }
        }
    }
</style>