import * as ACTIONS from '../actions'

const ACTION_HANDLERS = {
    //loading
    [ACTIONS.PERMISS_TREE_LOADING]: (state, action) => (
        Object.assign({}, state, {
            treeLoad: action.result
        })
    ),
    //authForm赋值
    [ACTIONS.PERMISS_AUTH_FORM]: (state, action) => (
        Object.assign({}, state, {
            authForm: action.result
        })
    ),
    //树列表菜单
    [ACTIONS.PERMISS_TREE_LIST]: (state, action) => (
        Object.assign({}, state, {
            treeList: action.result
        })
    ),
    //新增或编辑(系统，菜单，页面)
    [ACTIONS.PERMISS_ADD_OR_EDIT]: (state, action) => (
        Object.assign({}, state, {
            formInfo: action.result
        })
    ),
    //删除(系统，菜单，页面)
    [ACTIONS.PERMISS_DELETE]: (state, action) => (
        Object.assign({}, state, {
            proResult: action.result
        })
    ),
    //操作权限的load
    [ACTIONS.PERMISS_OPERATION_LOAD]: (state, action) => (
        Object.assign({}, state, {
            operationLoad: action.result
        })
    ),
    //查看操作权限列表
    [ACTIONS.PERMISS_OPERATION_LIST_SETPARAM]: (state, action) => (
        Object.assign({}, state, {
            setParams: action.result
        })
    ),
    [ACTIONS.PERMISS_OPERATION_LIST_GETPARAM]: (state, action) => (
        Object.assign({}, state, {
            operatAuthList: action.result
        })
    ),
    //新增操作权限(已有)
    [ACTIONS.PERMISS_OPERATION_ADD_TABLE]: (state, action) => (
        Object.assign({}, state, {
            operatAddData: action.result
        })
    ),
    //操作权限table列表(编辑)
    [ACTIONS.PERMISS_OPERATION_LIST_TABLE_SET]: (state, action) => (
        Object.assign({}, state, {
            setParams: action.result
        })
    ),
    [ACTIONS.PERMISS_OPERATION_LIST_TABLE_GET]: (state, action) => (
        Object.assign({}, state, {
            operatTableList: action.result
        })
    ),
    //新增操作权限(自定义)
    [ACTIONS.PERMISS_OPERATION_ADD]: (state, action) => (
        Object.assign({}, state, {
            operatAuthResult: action.result
        })
    ),
    //删除操作权限
    [ACTIONS.PERMISS_OPERATION_DELETE]: (state, action) => (
        Object.assign({}, state, {
            operatAuthResult: action.result
        })
    ),
    //操作权限的load
    [ACTIONS.PERMISS_DATAAUTH_LOAD]: (state, action) => (
        Object.assign({}, state, {
            dataAuthLoad: action.load
        })
    ),
    //数据权限列表
    [ACTIONS.PERMISS_DATAAUTH_LIST_SET]: (state, action) => (
        Object.assign({}, state, {
            setParams: action.result
        })
    ),
    [ACTIONS.PERMISS_DATAAUTH_LIST_GET]: (state, action) => (
        Object.assign({}, state, {
            dataAuthList: action.result
        })
    ),
    //数据权限---新增，编辑
    [ACTIONS.PERMISS_DATAAUTH_UPDATE]: (state, action) => (
        Object.assign({}, state, {
            dataAuthResult: action.result
        })
    ),
    //编辑数据权限
    [ACTIONS.PERMISS_DATAAUTH_EDIT]: (state, action) => (
        Object.assign({}, state, {
            dataAuthResult: action.result
        })
    ),
    //删除数据权限
    [ACTIONS.PERMISS_DATAAUYH_DELETE]: (state, action) => (
        Object.assign({}, state, {
            dataAuthResult: action.result
        })
    ),
    //测试数据权限
    [ACTIONS.PERMISS_DATAAUTH_TEST]: (state, action) => (
        Object.assign({}, state, {
            dataAuthResult: action.result
        })
    ),
}

const initialState = {
    treeLoad: false,
    treeList:{},
    formInfo:{},
    operationList:{},
    proResult:{},
    authForm:{},
    operationLoad:false,
    operatAddData:{},
    operatAuthList:[],
    setParams:{},
    operatTableList:[],
    operatAuthResult:{},
    dataAuthLoad:false,
    dataAuthList:[],
    dataAuthResult:{},
}

export function Reducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
}

export default Reducer