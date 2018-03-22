//读取组件列表
export const AUTHORITY_MENULIST_LOGINNAME_SUCCESS = 'AUTHORITY_MENULIST_LOGINNAME_SUCCESS'
export function getAuthMenuList(components,callBack) {
    return {
        type: AUTHORITY_MENULIST_LOGINNAME_SUCCESS,
        components,
        callBack
    }
}




