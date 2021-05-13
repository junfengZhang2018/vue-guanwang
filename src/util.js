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
    }
}