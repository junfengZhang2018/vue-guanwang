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
    }
}