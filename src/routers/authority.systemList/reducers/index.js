import * as ACTIONS from '../actions'

const ACTION_HANDLERS = {
    [ACTIONS.SYSTEMLIST_LOAD]: (state, action) => (
        Object.assign({}, state, {
            load: action.result
        })
    ),
    [ACTIONS.SYSTEMREPRESENT_LIST_GET]: (state, action) => (
        Object.assign({}, state, {
            systemList: action.result
        })
    ),
    //注销
    [ACTIONS.SYSTEMLIST_LOGOUT_SUCCESS]: (state, action) => (
        Object.assign({}, state, {
            user: action.user
        })
    ),
    //修改密码
    [ACTIONS.SYSTEMLIST_UPDATE_PASSWORD]: (state, action) => (
        Object.assign({}, state, {
            upPasswordResult: action.result
        })
    )
}

const initialState = {
    systemList: [],
    load: false,
    user:{},
    upPasswordResult:{}
}

export function Reducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
}

export default Reducer