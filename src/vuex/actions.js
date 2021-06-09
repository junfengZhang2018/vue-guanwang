import * as types from './mutation-types'

export const setUserInfo = ({ commit }, parm) => commit(types.SET_USER_INFO, parm)
export const setUserName = ({ commit }, parm) => commit(types.SET_USER_NAME, parm)

