import * as types from './mutation-types';

const mutations = {
    [types.SET_LEVEL_LIST] (state, parm) {
        state.levelList = parm;
    },
    [types.SET_EXCHANGE_RATE] (state, parm) {
        state.exchangeRate = parm;
    },
}
export default mutations;
