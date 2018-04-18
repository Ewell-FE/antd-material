//登陆
export const LOGIN_STATE = 'LOGIN_STATE'
export const LOGIN_CLICK_BUTTON_SUBMIT = 'LOGIN_CLICK_BUTTON_SUBMIT'
export const LOGIN_IMPORT_USERINFO = 'LOGIN_IMPORT_USERINFO'
export function changeLoginState(result) {
    return {
        type: LOGIN_STATE,
        result
    }
}
export function LoginSubmit(result,callBack) {
    return {
        type: LOGIN_CLICK_BUTTON_SUBMIT,
        result,
        callBack
    }
}
export function importUserInfo(result) {
    return {
        type: LOGIN_IMPORT_USERINFO,
        result
    }
}
