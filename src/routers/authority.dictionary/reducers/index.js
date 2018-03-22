import * as ACTIONS from '../actions'

const ACTION_HANDLERS = {
    //loading
    [ACTIONS.DICTIONARY_LOADING_STATE]: (state, action) => (
        Object.assign({}, state, {
            fetching: action.result
        })
    ),
    //列表
    [ACTIONS.DICTIONARY_LIST_SET]: (state, action) => (
        Object.assign({}, state, {
            setList: action.result
        })
    ),//新增或修改
    [ACTIONS.DICTIONARY_LIST_UPDATE_SET]: (state, action) => (
        Object.assign({}, state, {
            operationResult: action.result
        })
    ),//删除
    [ACTIONS.DICTIONARY_LIST_DELETE_SET]: (state, action) => (
        Object.assign({}, state, {
            delLoading: action.result
        })
    ),//类型数据获取
    [ACTIONS.DICTIONARY_TYPE_LIST_SET]: (state, action) => (
        Object.assign({}, state, {
            typeList: action.result
        })
    ),
}

const initialState = {
    fetching: false,
    setList: {data:[]},
    operationResult:{},
    typeList:{},
    delLoading:false
}

export function Reducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
}

export default Reducer