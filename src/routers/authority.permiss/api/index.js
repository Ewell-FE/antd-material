//菜单
export function fetchPermissTreeListApi(params) {
    return axios.post('/menu/read/tree', params)
        .then(function (result) {
            return result.data;
        })
}
//新增编辑(页面，系统，菜单)
export function fetchPermissAddOrEditApi(params) {
    return axios.post('/menu/updateAndInsert', params)
        .then(function (result) {
            return result.data;
        })
}
//删除(页面，系统，菜单)
export function fetchPermissDeleteApi(params) {
    return axios.post('/menu/delete', params)
        .then(function (result) {
            return result.data;
        })
}
//查看操作权限列表
export function fetchPermissOperationApi(params) {
    return axios.post('/dic/read/list', params)
        .then(function (result) {
            return result.data;
        })
}
//新增操作权限(已有，添加到table表中)
export function fetchPermissOperationAddTableApi(params) {
    return axios.post('/role/add/menuOperation', params)
        .then(function (result) {
            return result.data;
        })
}
//新增操作权限(自定义)
export function fetchPermissOperationAddApi(params) {
    return axios.post('/dic/updateAndInsert', params)
        .then(function (result) {
            return result.data;
        })
}
//操作权限table(编辑)
export function fetchPermissOperationTableApi(params) {
    return axios.post('/role/read/menuOperationList', params)
        .then(function (result) {
            return result.data;
        })
}
//删除操作权限
export function fetchPermissOperationDeleteApi(params) {
    return axios.post('/role/delete/menuOperation', params)
        .then(function (result) {
            return result.data;
        })
}
//获取数据权限
export function fetchPermissDataAuthListApi(params) {
    return axios.post('/param/read/getParamByMenuId', params)
        .then(function (result) {
            return result.data;
        })
}
//新增数据权限
export function fetchPermissDataAuthUpdateApi(params) {
    return axios.post('/param/updateAndInsert', params)
        .then(function (result) {
            return result.data;
        })
}
//测试数据权限
export function fetchPermissDataAuthTestApi(params) {
    return axios.post('/param/read/interfacet', params)
        .then(function (result) {
            return result.data;
        })
}
//删除数据权限
export function fetchPermissDataAuthDelApi(params) {
    return axios.post('/param/delete', params)
        .then(function (result) {
            return result.data;
        })
}