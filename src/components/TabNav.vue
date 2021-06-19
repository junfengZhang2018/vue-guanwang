<template>
    <div class="tabNav">
        <div class="nav-item" :class="(item.url&&$route.path.includes(item.url)||item.state&&$route.query.state === item.state)?'select':''" v-for="(item, i) in tabsList" :key="i" @click="goPage(item)">
            <div class="number"><span v-if="item.Symbol">{{item.Symbol}}</span>{{item.num}}</div>
            <div class="desc">{{item.name}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props:['tabsList', 'url'],
    data() {
        return {
            
        };
    },
    methods: {
        goPage(item){
            if(item.url){
                this.$router.push(item.url);
            }else if(item.state){
                this.$router.push({
                    path: this.url,
                    query: {
                        state: item.state,
                        name:item.name
                    }
                });
            }
        }
    },
    created() {
        
    },
};
</script>
<style lang="less" scoped>
.tabNav{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #fff;
    border: 1px solid #eeeeee;
    .nav-item{
        flex: 1;
        padding: 6px;
        user-select: none;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        cursor: pointer;
        width: 0;
        min-width: 0;
        border-left: 1px solid #eee;
        .number{
          font-size: 18px;
          font-weight: bold;
        }
        .desc{
          margin-top: 2px;
          font-size: 13px;
          line-height: 16px;
        }
    }
    .nav-item.select{
      color: #007fff;
    }
    .nav-item:first-child{
        border: none;
    }
}
</style>