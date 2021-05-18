import Vue from 'vue'
import Dialog from './dialog.vue'

const DialogBox = Vue.extend(Dialog);

let instance;

Dialog.show = (data) => {
    instance = new DialogBox({
        propsData: data
    }).$mount();
    document.body.appendChild(instance.$el);
    Vue.nextTick(() => {
        instance.show = true;
    })
}

Dialog.close = () => {
    instance.show = false;
}

Dialog.install = (Vue) => {
    Vue.prototype.$dialog = function(options) {
        Dialog.show(options);
    };
    Vue.prototype.$closeDialog = function() {
        Dialog.close();
    };
    
    Vue.component(Dialog.name, Dialog);
}

export default Dialog;