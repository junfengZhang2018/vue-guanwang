export default {
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

}