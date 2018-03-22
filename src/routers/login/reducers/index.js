import * as ACTIONS from '../actions'

const ACTION_HANDLERS = {
    //登录
    [ACTIONS.LOGIN_STATE]: (state, action) => (
        Object.assign({}, state, {
            fetching: action.result
        })
    ),
    [ACTIONS.LOGIN_CLICK_BUTTON_SUBMIT]: (state, action) => (
        Object.assign({}, state, {
            loginInput: action.result
        })
    ),
    [ACTIONS.LOGIN_IMPORT_USERINFO]: (state, action) => (
        Object.assign({}, state, {
            userInfo: action.result
        })
    )
}

const initialState = {
    fetching: false,
    loginInput: {},
    userInfo: {}
}

export function Reducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
}

export default Reducer