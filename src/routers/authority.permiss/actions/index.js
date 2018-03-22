//loading
export const PERMISS_TREE_LOADING = 'PERMISS_TREE_LOADING'
export function getPermissTreeLoad(result) {
    return {
        type: PERMISS_TREE_LOADING,
        result
    }
}
//表格
export const PERMISS_AUTH_FORM = "PERMISS_AUTH_FORM"
export function getPermissAuthFormList(result,callBack){
    return {
        type:PERMISS_AUTH_FORM,
        result,
        callBack
    }
}
//树列表
export const PERMISS_TREE_LIST = "PERMISS_TREE_LIST"
export function getPermissTreeList(result,callBack){
    return {
        type:PERMISS_TREE_LIST,
        result,
        callBack
    }
}
//新增或编辑(系统，菜单，页面)
export const PERMISS_ADD_OR_EDIT = "PERMISS_ADD_OR_EDIT"
export function getPermissAddOrEdit(result,callBack){
    return {
        type:PERMISS_ADD_OR_EDIT,
        result,
        callBack
    }
}
//删除(系统，菜单，页面)
export const PERMISS_DELETE = "PERMISS_DELETE"
export function getPermissDelete(result,callBack){
    return {
        type:PERMISS_DELETE,
        result,
        callBack
    }
}
//操作权限load
export const PERMISS_OPERATION_LOAD = "PERMISS_OPERATION_LOAD"
export function getPermissOperationLoad(result){
    return {
        type:PERMISS_OPERATION_LOAD,
        result
    }
}
//查看操作权限列表
export const PERMISS_OPERATION_LIST_SETPARAM = "PERMISS_OPERATION_LIST_SETPARAM"
export function getPermissOperationListSet(result,callBack){
    return {
        type:PERMISS_OPERATION_LIST_SETPARAM,
        result
    }
}
export const PERMISS_OPERATION_LIST_GETPARAM = "PERMISS_OPERATION_LIST_GETPARAM"
export function getPermissOperationList(result){
    return {
        type:PERMISS_OPERATION_LIST_GETPARAM,
        result
    }
}
//新增操作权限(已有)
export const PERMISS_OPERATION_ADD_TABLE= "PERMISS_OPERATION_ADD_TABLE"
export function getPermissOperationAddTable(result,callBack){
    return {
        type:PERMISS_OPERATION_ADD_TABLE,
        result,
        callBack
    }
}
//操作权限table列表(编辑)
export const PERMISS_OPERATION_LIST_TABLE_GET= "PERMISS_OPERATION_LIST_TABLE_GET"
export function getPermissOperationTableList(result){
    return {
        type:PERMISS_OPERATION_LIST_TABLE_GET,
        result
    }
}
export const PERMISS_OPERATION_LIST_TABLE_SET= "PERMISS_OPERATION_LIST_TABLE_SET"
export function getPermissOperationTableSetParams(result){
    return {
        type:PERMISS_OPERATION_LIST_TABLE_SET,
        result
    }
}
//新增操作权限(自定义)
export const PERMISS_OPERATION_ADD = "PERMISS_OPERATION_ADD"
export function getPermissOperationAdd(result,callBack){
    return {
        type:PERMISS_OPERATION_ADD,
        result,
        callBack
    }
}
//删除操作权限
export const PERMISS_OPERATION_DELETE = "PERMISS_OPERATION_DELETE"
export function getPermissOperationDel(result,callBack){
    return {
        type:PERMISS_OPERATION_DELETE,
        result,callBack
    }
}
//数据权限load
export const PERMISS_DATAAUTH_LOAD = "PERMISS_DATAAUTH_LOAD"
export function getPermissDataAuthLoad(load){
    return {
        type:PERMISS_DATAAUTH_LOAD,
        load
    }
}
//数据权限列表
export const PERMISS_DATAAUTH_LIST_SET = "PERMISS_DATAAUTH_LIST_SET"
export function getPermissDataAuthListSetParam(result,callBack){
    return {
        type:PERMISS_DATAAUTH_LIST_SET,
        result,
        callBack
    }
}
export const PERMISS_DATAAUTH_LIST_GET = "PERMISS_DATAAUTH_LIST_GET"
export function getPermissDataAuthList(result){
    return {
        type:PERMISS_DATAAUTH_LIST_GET,
        result
    }
}
//数据权限--新增，编辑
export const PERMISS_DATAAUTH_UPDATE = "PERMISS_DATAAUTH_UPDATE"
export function getPermissDataAuthAdd(result,callBack){
    return {
        type:PERMISS_DATAAUTH_UPDATE,
        result,
        callBack
    }
}
//编辑数据权限
export const PERMISS_DATAAUTH_EDIT = "PERMISS_DATAAUTH_EDIT"
export function getPermissDataAuthEdit(result,callBack){
    return {
        type:PERMISS_DATAAUTH_EDIT,
        result,
        callBack
    }
}
//测试操数据权限
export const PERMISS_DATAAUTH_TEST = "PERMISS_DATAAUTH_TEST"
export function getPermissDataAuthTest(result,callBack){
    return {
        type:PERMISS_DATAAUTH_TEST,
        result,
        callBack
    }
}
//删除数据权限
export const PERMISS_DATAAUYH_DELETE = "PERMISS_DATAAUYH_DELETE"
export function getPermissDataAuthDel(result,callBack){
    return {
        type:PERMISS_DATAAUYH_DELETE,
        result,
        callBack
    }
}
