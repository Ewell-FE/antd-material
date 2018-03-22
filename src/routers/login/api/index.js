//登录
export function fetchLoginApi(user) {
    return axios.post('/jwtLogin', {
        account: user.userName,
        password: user.userPwd
    },true).then(function (result) {
        return result.data;
    })
}
