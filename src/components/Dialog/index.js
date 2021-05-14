import Vue from 'vue'
import Dialog from './dialog.vue'

const DialogBox = Vue.extend(Dialog);

Dialog.show = (data) => {
    let instance = new DialogBox({
        data
    }).$mount();
    document.body.appendChild(instance.$el);
    Vue.nextTick(() => {
        instance.show = true;
    })
}

Dialog.install = (Vue) => {
    Vue.prototype.$dialog = function(options) {
        Dialog.show(options);
    };
}

export default Dialog;