//字典查询（带分页）
export function fetchDicList(params) {
    return axios.post('/dic/read/page', params, 'authority_dictionary')
        .then(function (result) {
            return result.data;
        })
}

//修改 和 新增
export function fetchDicUpdateAndInsert(params) {
    return axios.post('/dic/updateAndInsert', params)
        .then(function (result) {
            return result.data;
        })
}

//删除
export function fetchDicDelete(params) {
    return axios.post('/dic/delete', params)
        .then(function (result) {
            return result.data;
        })
}

//查看详情
export function fetchDicDetail(params) {
    return axios.post('/dic/read/detail', params)
        .then(function (result) {
            return result.data;
        })
}


//类型
export function fetchDicType(params) {
    return axios.post('/dic/queryDicType', params)
        .then(function (result) {
            return result.data;
        })
}
