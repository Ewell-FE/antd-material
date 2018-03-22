
//查看权限
export function getComponents(opts) {
    return axios.post('/getComponents', opts)
        .then(function (result) {
            return result.data
        })
}

