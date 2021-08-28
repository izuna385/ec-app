import * as Actions from './actions'
import initialState from "../stores/initialState";

export const UsersReducer = (state = initialState.users, action) => {
    switch (action.type) {
        case Actions.SIGN_IN:
            return {
                ...state, // stateをコメントアウトした場合、action.payloadですべて上書きされる
                ...action.payload // stateと重複するものは、 ...action.payload内のものに上書きされる。
            }
        default:
            return state
    }
}