<template>
    <transition-group name="fade">
        <div class="mask" v-if="show" @touchmove.prevent key="1"></div>
        <div class="dialog" key="2" v-show="show">
            <div class="dialog-body">
                <div class="dialog-head">
                    <span class="dialog-title">{{title}}</span>
                </div>
                <div class="dialog-content">
                    <slot />
                    <div class="word-content" :class="contentClass">{{content}}</div>
                    <img v-if="imgUrl" :src="imgUrl" alt="">
                </div>
                <div class="dialog-foot">
                    <a
                        @click="action('confirm')"
                        :class="confirmButtonClass"
                        class="dialog-btn dialog-btn-default"
                        >{{btnText}}</a
                    >
                    <a
                        v-if="cancelText"
                        @click="action('cancel')"
                        :class="cancelButtonClass"
                        class="dialog-btn dialog-btn-default"
                        >{{cancelText}}</a
                    >
                </div>
            </div>
        </div>
    </transition-group>
</template>

<script>
export default {
    name: "Dialog",
    data() {
        return {
            show: false
        };
    },
    props: {
        visible: { type: Boolean, default: false },
        title: { type: String },
        content: { type: String },
        btnText: { type: String, default: "确定" },
        cancelText: { type: String },
        imgUrl: { type: String },
        contentClass: { type: String },
        confirmButtonClass: { type: String },
        cancelButtonClass: { type: String },
        onConfirm: { type: Function },
        onCancel: { type: Function },
        closeWhenConfirm: { type: Boolean, default: true },
        closeWhenCancel: { type: Boolean, default: true },
    },
    watch: {
        visible: { 
            handler(val){
                this.show = val;
            },
            immediate: true
        }
    },
    created() {
        
    },
    methods: {
        action(type){
            if(type === 'confirm'){
                this.onConfirm && this.onConfirm();
                if(this.closeWhenConfirm){
                    this.closeDialog();
                }
            }else if(type === 'cancel'){
                this.onCancel && this.onCancel();
                if(this.closeWhenCancel){
                    this.closeDialog();
                }
            }
        },
        closeDialog(){
            this.$emit('update:visible', false);
            this.show = false;
        }
    },
};
</script>

<style lang="less" scoped>
// 渐变过渡
.fade-enter,
.fade-leave-active {
    opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.35s;
}
// 全局弹窗
.mask {
    background: rgba(0, 0, 0, 0.75);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    width: 100%;
    height: 100%;
}
.dialog{
    position: fixed;
    z-index: 1002;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 480px;
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden;
    .dialog-head {
        text-align: center;
        padding: 16px;
        background-color: #fff;
        .dialog-title{
            font-size: 17px;
            font-weight: 500;
        }
    }
    .dialog-content {
        overflow: auto;
        padding: 12px 20px 32px;
        text-align: center;
        font-size: 16px;
        line-height: 24px;
        .word-content + img{
            margin-top: 26px;
        }
        img{
            width: 160px;
            height: 160px;
        }
    }
    .dialog-foot {
        display: flex;
        margin-top: 1px;
        border-top: 1px solid #eeeeee;
        .dialog-btn{
            flex: 1;
            user-select: none;
            padding: 12px 12px;
            font-weight: 500;
            font-size: 17px;
            line-height: 20px;
            text-align: center;
            &:last-child{
                border-left: 1px solid #eeeeee;
            }
        }
    }
}
</style>