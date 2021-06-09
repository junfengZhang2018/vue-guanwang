import * as types from './mutation-types';

const mutations = {
    [types.SET_USER_INFO] (state, parm) {
        state.userInfo = parm;
    },
    [types.SET_LEVEL_LIST] (state, parm) {
        state.levelList = parm;
    },
    [types.SET_EXCHANGE_RATE] (state, parm) {
        state.exchangeRate = parm;
    },
    [types.SET_USER_NAME] (state, parm) {
        state.userName = parm;
    },
    
}
export default mutations;
