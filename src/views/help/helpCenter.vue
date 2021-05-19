<template>
   <div class='helpCenter'>
      <div class="subhead-right">
        <a @click.prevent="" class="breadBtn breadBtn-primary">
            <span>联系客服</span>
        </a>
      </div>
      <div class="main">
        <div class="panel">
          <ul class="helpList">
            <li class="helpList-item" v-for="(item,index) in helpList" :key="index"><a :href="item.url">{{item.title}}</a></li>
          </ul>
        </div>
      </div>
   </div>
</template>

<script>
   // import 《组件名称》 from '《组件路径》';
    export default {
        components: {},
        data() {
        //这里存放数据
            return {
            helpList:[{
              url:'/help/howToChangeAddress',
              title:'如何修改收货地址'
            },{
              url:'/help/helpPage',
              title:'首次使用代运须知'
            },{
              url:'/help/deposit',
              title:'如何充值进我的钱包'
            },{
              url:'/help/helpPage1',
              title:'包裹已经送达仓库，但未见代运订单'
            },{
              url:'/help/helpPage2',
              title:'包裹在仓库可以存放多久'
            },{
              url:'/help/helpPage3',
              title:'如何查看商家发货快递单号'
            },{
              url:'/help/helpPage4',
              title:'商品如何退货或换货'
            },{
              url:'/help/helpPage5',
              title:'代运包裹签收及验货规则'
            },{
              url:'/help/helpPage6',
              title:'商家发货后多久可送达仓库'
            },{
              url:'/help/packageName',
              title:'如何填写包裹名称'
            },{
              url:'/help/howAddPackage',
              title:'如何添加包裹'
            }]
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
  .main{
    line-height: 1.625;
    .panel{
      .helpList{
        .helpList-item{
          list-style: none;
          padding: 0;
          margin: 0;
          background-color: #ffffff;
          border-top: 1px dashed #eeeeee;
          a{
            display: block;
            padding: 12px 10px;
            color: #000000;
            text-decoration: none;
            font-weight: 500;
          }
        }
        .helpList-item:first-child{
          border-top: none;
        }
      }
    }
  }
</style>