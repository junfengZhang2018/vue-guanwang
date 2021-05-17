<template>
    <div class="coupon">
        <Default>暂无优惠券</Default>
    </div>
</template>
<script>
import Default from '@/components/default';
export default {
	components: { Default },
    data() {
        //这里存放数据
        return {};
    },
};
</script>
<style lang='less' scoped>
.main {
}
@media screen and (max-width: 768px) {
    .main {
    }
}
</style>