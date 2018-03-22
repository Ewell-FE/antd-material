//系统列表
export function fetchSystemRepresentList(params) {
    return axios.post('/authorize/user/accessSystemList', params)
        .then(function (result) {
            return result.data
        }).catch(function (error) {
            console.error("URL: " + interFace + error)
        })
}

//注销
export function fetchSystemListLogOut(opts) {
    return axios.post('/logout',opts)
        .then(function(result){
            return result.data
        }).catch(function(error){
            console.error('URL: '+ interFace+error)
        })
}
//修改密码
export function fetchSystemListUpdataPassword(opts) {
    return axios.post('/user/updateAndInsert',opts)
        .then(function(result){
            return result.data
        }).catch(function(error){
            console.error('URL: '+ interFace+error)
        })
}
