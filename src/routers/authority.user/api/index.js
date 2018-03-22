//获取列表
export function fetchListApi(params) {
    return axios.post('/user/read/page', params,"authority_user")
        .then(function (result) {
            return result.data;
        })
}
//查看角色权限
export function fetchViewRoleApi(params) {
    return axios.post('/user/read/roleList', params)
        .then(function (result) {
            return result.data;
        })
}
//查看角色权限树
export function fetchViewRoleTreeApi(params) {
    return axios.post('/user/read/permissionTree', params)
        .then(function (result) {
            return result.data;
        })
}
//重置密码
export function resetPassWordApi(params) {
    return axios.post('/user/update/password', params)
        .then(function (result) {
            return result.data;
        })
}
//冻结用户
export function frozeUserApi(params) {
    return axios.post('/user/enable', params)
        .then(function (result) {
            return result.data;
        })
}
//解冻用户
export function unfrozeUserApi(params) {
    return axios.post('/user/enable', params)
        .then(function (result) {
            return result.data;
        })
}
//删除用户
export function deleteUserApi(params) {
    return axios.post('/user/delete', params)
        .then(function (result) {
            return result.data;
        })
}
//请求角色列表
export function fentchRoleListApi(params) {
    return axios.post('/role/read/list', params)
        .then(function (result) {
            return result.data;
        })
}
//根据选中角色请求树
export function fentchAddUserTreeApi(params) {
    return axios.post('/role/read/permissionTree', params)
        .then(function (result) {
            return result.data;
        })
}
//保存用户-注册用户
export function saveUserApi(params) {
    return axios.post('/register', params)
        .then(function (result) {
            return result.data;
        })
}
//保存用户-修改用户
export function saveUserUpdateApi(params) {
    return axios.post('/user/update', params)
        .then(function (result) {
            return result.data;
        })
}
//保存用户-修改用户权限
export function saveUserRoleApi(params) {
    return axios.post('/user/update/role', params)
        .then(function (result) {
            return result.data;
        })
}
//保存用户-修改菜单及操作权限
export function saveUserPermissionApi(params) {
    return axios.post('/user/update/permission', params)
        .then(function (result) {
            return result.data;
        })
}
//保存用户-修改菜单及数据权限
export function saveUserDataPermissionApi(params) {
    return axios.post('/param/updateAndInsert', params)
        .then(function (result) {
            return result.data;
        })
}
//查询角色树
export function fentchReadRoleTreeApi(params) {
    return axios.post('/menu/read/tree', params)
        .then(function (result) {
            return result.data;
        })
}
//新增角色-注册角色
export function saveRoleApi(params) {
    return axios.post('/role/updateAndInsert', params)
        .then(function (result) {
            return result.data;
        })
}
//新增角色-更新角色权限
export function saveRolePermissionApi(params) {
    return axios.post('/role/update/permission', params)
        .then(function (result) {
            return result.data;
        })
}
//编辑角色-获取用户信息
export function editGetCurrentUserApi(params) {
    return axios.post('/user/read/detail', params)
        .then(function (result) {
            return result.data;
        })
}
//编辑角色-获取用户角色
export function editGetRoleApi(params) {
    return axios.post('/user/read/roleList', params)
        .then(function (result) {
            return result.data;
        })
}