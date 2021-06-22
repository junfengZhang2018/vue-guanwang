export default {
    /**
     * 表单校验
     * @param {Object} form 表单对象
     * @param {Object} rules 规则配置
     * @returns 
     */
    validate(form, rules){
        for(let field in form){
            for(let i = 0, ruleLength = rules[field].length; i < ruleLength; i++){
                let rule = rules[field][i];
                if(rule.required && form[field] === ''){
                    return rule.message;
                }
                if(rule.pattern && !rule.pattern.test(form[field])){
                    return rule.message;
                }
            }
        }
    },
    /**
     * 保留n位小数
     * @param {Number} value 数值
     * @param {Number} n 小数保留位数
     * @returns 
     */
    dealFloat(value, n=1) {
        var f = Math.round(value*Math.pow(10,n))/Math.pow(10,n);
        var s = f.toString();
        var rs = s.indexOf('.');   
        if (rs < 0) {     
            s += '.';   
        } 
        for(var i = s.length - s.indexOf('.'); i <= n; i++){
          s += "0";
        }
        return n ? s : s.slice(0, -1);
    },
    /**
     * 除法
     * @param {Number} num1 被除数
     * @param {Number} num2 除数
     * @returns 
     */
    accDiv(num1, num2){
        var t1, t2, r1, r2;
        try{
            t1 = num1.toString().split('.')[1].length;
        }catch(e){
            t1 = 0;
        }
        try{
            t2 = num2.toString().split(".")[1].length;
        }catch(e){
            t2 = 0;
        }
        r1 = Number(num1.toString().replace(".",""));
        r2 = Number(num2.toString().replace(".",""));
        return (r1/r2)*Math.pow(10,t2-t1);
    },
    storage: {
        //存储
        set(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        },
        //取出数据
        get(key) {
            return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;
        },
        // 删除数据
        remove(key) {
            localStorage.removeItem(key);
        }
    },
    sessionStorage: {
        //存储
        set(key, value) {
            sessionStorage.setItem(key, JSON.stringify(value));
        },
        //取出数据
        get(key) {
            return sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key)) : null;
        },
        // 删除数据
        remove(key) {
            sessionStorage.removeItem(key);
        }
    },
    //禁止浏览器页面滚动
    disableBodyScroll() {
        document.body.parentNode.style.overflow = 'hidden';  //禁止横竖向滚动条
        if (document.documentElement.offsetHeight > document.documentElement.clientHeight - 4) {
            document.body.parentNode.style.paddingRight = this.getScrollbarWidth() + 'px';  //防止取消滚动条时页面抖动
        }
    },
    //允许浏览器页面滚动
    enableBodyScroll() {
        document.body.parentNode.style.overflow = 'auto';  //恢复横竖向滚动条
        document.body.parentNode.style.paddingRight = 0;  //禁止横竖向滚动条
    },
    //获取浏览器滚动条宽度
    getScrollbarWidth() {
        const outer = document.createElement('div');
        outer.className = 'ws-scrollbar__wrap';
        outer.style.visibility = 'hidden';
        outer.style.width = '100px';
        outer.style.position = 'absolute';
        outer.style.top = '-9999px';
        document.body.appendChild(outer);

        const widthNoScroll = outer.offsetWidth;
        outer.style.overflow = 'scroll';

        const inner = document.createElement('div');
        inner.style.width = '100%';
        outer.appendChild(inner);

        const widthWithScroll = inner.offsetWidth;
        outer.parentNode.removeChild(outer);
        return widthNoScroll - widthWithScroll;
    },
}