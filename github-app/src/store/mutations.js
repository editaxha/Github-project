import * as types from './mutation-type'

export const mutations = {
    [types.SIGN_IN](state, user_payload) {
        state.userdata = user_payload
    }
}
