<template>
   <div class='freightPrice'>
        <div class="subhead-right">
            <a @click.prevent="$router.push('/freightPrice/calculation')" class="breadBtn breadBtn-success">
                <span>计算运费</span>
            </a>
        </div>
        <div class="top">
            <div class="tab-nav">
                <div class="nav-item tc" v-for="(item, i) in regionList" :key="i">
                    <a :href="'#table'+i+'0'">
                        <div>{{item.name}}</div>
                        <div class="desc">{{item.engName}}</div>
                    </a>
                </div>
            </div>
        </div>
        <a-table :id="'table'+data.region+data.index" :tableId="i" :data="data" v-for="(data, i) in tableData" :key="i" />
   </div>
</template>

<script>
    import ATable from '@/components/ATable';
    import tableData from './data'

    export default {
        components: {
            ATable
        },
        data() {
        //这里存放数据
            return {
                tableData,
                regionList: [
                    { name: '西马', engName: 'West Malaysia' },
                    { name: '东马', engName: 'East Malaysia' },
                    { name: '新加坡', engName: 'Singapore' }
                ]
            };
        },
        //监听属性 类似于data概念
        computed: {},
        //监控data中的数据变化
        watch: {},
        //方法集合
        methods: {
        
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
    .top{
        position: sticky;
        z-index: 3;
        top: 0px;
        background-color: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(2px);
        .tab-nav{
            border: 1px solid #eee;
            display: flex;
            .nav-item{
                flex: 1;
                padding: 6px;
                user-select: none;
                font-size: 18px;
                line-height: 24px;
                cursor: pointer;
                &:hover div{
                    color: #007fff;
                }
                &+.nav-item{
                    border-left: 1px solid #eee;
                }
                .desc{
                    margin-top: 2px;
                    font-size: 13px;
                    line-height: 16px;
                }
            }
        }
    }
    @media only screen and (max-width: 768px){
        .top {
            top: 60px;
        }
    }

</style>