import * as types from './mutation-types';

const mutations = {
    [types.SET_LEVEL_LIST] (state, parm) {
        state.levelList = parm;
    },
}
export default mutations;
