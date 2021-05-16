import * as types from './mutation-types';

const mutations = {
    [types.GET_USER_INFO] (state, parm) {  //登录用户信息
        state.userInfo = parm;
    },
}
export default mutations;
