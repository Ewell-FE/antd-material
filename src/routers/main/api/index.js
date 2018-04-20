function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, {
            data: {
                httpCode: 200,
                data: {
                    
                }
            }
        });
    });
}
//登录
export function fetchLoginApi(user) {
    return timeout(1000).then(function (result) {
        return result.data;
    })
}
