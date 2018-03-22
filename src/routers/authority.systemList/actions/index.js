//系统列表
export const SYSTEMLIST_LOAD = 'SYSTEMLIST_LOAD'
export function getSystemListLoad(result) {
    return {
        type: SYSTEMLIST_LOAD,
        result
    }
}
export const SYSTEMREPRESENT_LIST_GET = 'SYSTEMREPRESENT_LIST_GET'
export function getSystemRepresentList(result) {
    return {
        type: SYSTEMREPRESENT_LIST_GET,
        result
    }
}

//注销
export const SYSTEMLIST_LOGOUT_SUCCESS = 'SYSTEMLIST_LOGOUT_SUCCESS'
export function systemListLogOutSuccess(user){
    return{
        type: SYSTEMLIST_LOGOUT_SUCCESS,
        user:user
    }
}


//修改密码
export const SYSTEMLIST_UPDATE_PASSWORD = 'SYSTEMLIST_UPDATE_PASSWORD'
export function systemListUpdatePassword(result,callBack){
    return{
        type: SYSTEMLIST_UPDATE_PASSWORD,
        result,
        callBack
    }
}
