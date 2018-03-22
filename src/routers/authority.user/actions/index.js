//刷新
export const USER_LOADING_STATE = 'USER_LOADING_STATE'
export function userLodaing(result) {
    return {
        type:USER_LOADING_STATE,
        result
    }
}
//modal刷新
export const USER_MODAL_LOADING_STATE = 'USER_MODAL_LOADING_STATE'
export function userModalLodaing(result) {
    return {
        type:USER_MODAL_LOADING_STATE,
        result
    }
}
//获取列表
export const USER_FETCH_LIST = 'USER_FETCH_LIST'
export function userFentchList(result) {
    return {
        type:USER_FETCH_LIST,
        result
    }
}
//查看角色权限
export const USER_VIEW_ROLE = 'USER_VIEW_ROLE'
export function userViewRole(result,callBack) {
    return {
        type:USER_VIEW_ROLE,
        result,
        callBack
    }
}
//重置密码
export const USER_RESET_PASSWORD = 'USER_RESET_PASSWORD'
export function userResetPassword(result,callBack) {
    return {
        type:USER_RESET_PASSWORD,
        result,
        callBack
    }
}
//冻结用户
export const USER_FROZE_USER = 'USER_FROZE_USER'
export function userFrozeUser(result,callBack) {
    return {
        type:USER_FROZE_USER,
        result,
        callBack
    }
}
//解冻用户
export const USER_UNFROZE_USER = 'USER_UNFROZE_USER'
export function userUnfrozeUser(result,callBack) {
    return {
        type:USER_UNFROZE_USER,
        result,
        callBack
    }
}
//删除用户
export const USER_DELETE_USER = 'USER_DELETE_USER'
export function userDeleteUser(result,callBack) {
    return {
        type:USER_DELETE_USER,
        result,
        callBack
    }
}
//请求角色列表
export const USER_ROLE_LIST = 'USER_ROLE_LIST'
export function userFentchRoleList(result,callback) {
    return {
        type:USER_ROLE_LIST,
        result,
        callback
    }
}
//根据选中角色请求树
export const USER_ADD_USER_TREE = 'USER_ADD_USER_TREE'
export function userAddUserTree(result,callBack) {
    return {
        type:USER_ADD_USER_TREE,
        result,
        callBack
    }
}
//清空树
export const USER_DEL_USER_TREE = 'USER_DEL_USER_TREE'
export function userDelUserTree(result) {
    return {
        type:USER_DEL_USER_TREE,
        result
    }
}
//保存用户
export const USER_SAVE_USER = 'USER_SAVE_USER'
export function userSaveUser(result,callBack,message) {
    return {
        type:USER_SAVE_USER,
        result,
        callBack,
        message
    }
}
//获取角色树
export const USER_READ_ROLE_TREE = 'USER_READ_ROLE_TREE'
export function userReadRoleTree(result) {
    return {
        type:USER_READ_ROLE_TREE,
        result
    }
}
//新增角色
export const USER_ADD_ROLE = 'USER_ADD_ROLE'
export function userAddRole(result,callBack,message) {
    return {
        type:USER_ADD_ROLE,
        result,
        callBack,
        message
    }
}
//保存编辑ID
export const USER_SAVE_EDIT_ID = 'USER_SAVE_EDIT_ID'
export function userSaveEditId(result) {
    return {
        type:USER_SAVE_EDIT_ID,
        result
    }
}
//编辑用户-获取用户基本信息
export const USER_EDIT_GET_CURRENT_USER = 'USER_EDIT_GET_CURRENT_USER'
export function userEditGetCurrentUser(result) {
    return {
        type:USER_EDIT_GET_CURRENT_USER,
        result
    }
}
//清空表单
export const USER_DEL_CURRENT_USER = 'USER_DEL_CURRENT_USER'
export function userDelCurrentUser(result) {
    return {
        type:USER_DEL_CURRENT_USER,
        result
    }
}
//编辑用户-获取角色
export const USER_EDIT_GET_ROLE = 'USER_EDIT_GET_ROLE'
export function userEditGetRole(result,callBack) {
    return {
        type:USER_EDIT_GET_ROLE,
        result,
        callBack
    }
}
//编辑用户获取树
export const USER_EDIT_GET_TREE = 'USER_EDIT_GET_TREE'
export function userEditGetTree(result) {
    return {
        type:USER_EDIT_GET_TREE,
        result
    }
}
//编辑时保存Table条件
export const USER_SAVE_TABLE_CONDITION = 'USER_SAVE_TABLE_CONDITION'
export function userSaveTableCondition(result) {
    return {
        type:USER_SAVE_TABLE_CONDITION,
        result
    }
}