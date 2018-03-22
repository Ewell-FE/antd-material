import * as ACTIONS from '../actions'

function getTree(json = [], flag) {
    let array = [];
    function _getChilds(data) {
        let item = {
            id: data.id,
            pId: data.parentId,
            name: data.menuName,
            open: true,
            checked: true,
        }

        if(data.id === json[0].id){
            array.push({...item,font:{'color':'#333'}});
        }else{
            array.push({...item});
        }
        if (data.operations && data.operations.length !== 0) {
            let parentId = data.id + 'o'
            array.push({
                id: parentId,
                pId: data.id,
                name: '操作权限',
                flag: 'fakeParent',
                open: true,
                checked: true
            })
            data.operations.forEach((item) => {
                array.push({
                    id: item.id,
                    pId: parentId,
                    truePid: item.menuId,
                    name: item.operationCodeText,
                    code: item.operationCode,
                    open: true,
                    checked: true,
                    font:{'color':"rgba(0,0,0,0.50)"}
                });
            })

        }
        if (flag) {
            if (data.dataRoles && data.dataRoles.length !== 0) {
                let parentRoleId = data.id + 'r'
                array.push({
                    id: parentRoleId,
                    pId: data.id,
                    name: '数据权限',
                    flag: 'fakeParent',
                    open: true,
                    checked: true
                })
                let disabled = false
                data.dataRoles.forEach((item) => {
                    if (item.key === 'Timeout') {
                        disabled = true
                    } else {
                        disabled = false
                    }
                    array.push({
                        id: item.key+item.name,
                        pId: parentRoleId,
                        truePid: data.id,
                        name: item.name + '(' + item.key + ')',
                        paramId: item.paramId,
                        paramKey: item.key,
                        trueName: item.name,
                        open: true,
                        checked: !disabled,
                        chkDisabled: disabled,
                        font:{'color':"rgba(0,0,0,0.50)"}
                    });
                })

            }
        } else {
            if (data.dataRolesUrl && data.dataRolesUrl.length !== 0) {
                let parentRoleId = data.id + 'url'
                array.push({
                    id: parentRoleId,
                    pId: data.id,
                    name: '数据权限',
                    flag: 'fakeParent',
                    open: true,
                    checked: true
                })
                data.dataRolesUrl.forEach((item) => {
                    array.push({
                        id: item.paramId,
                        paramKey: item.key,
                        pId: parentRoleId,
                        truePid: data.id,
                        paramId:item.paramId,
                        name: item.name + '(' + item.key + ')',
                        trueName: item.name,
                        open: true,
                        checked: true,
                        font:{'color':"rgba(0,0,0,0.50)"}
                    });
                })

            }
        }

        if (data.menuBeans.length !== 0) {
            getChilds(data.menuBeans)
        } else {
            return;
        }
    }

    function getChilds(data) {
        for (var i = 0; i < data.length; i++) {
            _getChilds(data[i]);
        }
    }

    getChilds(json);
    return array;
}

function getRoleTree(json = [], flag = false) {
    let arr = [];
    if (json.length !== 0) {
        json[0].menuBeans.forEach((item) => {
            arr.push(getTree([item], flag))
        });
    }
    return arr;
}

function getCheckTree(allTree = [], checkTree = [], flag) {
    let all = getRoleTree(allTree, flag);
    let check = getRoleTree(checkTree, flag);
    let checkId = [], allIndex = [], checkIndex = [];
    all.forEach((item) => {
        item.forEach((it) => {
            if (it.pId === '1') {
                allIndex.push(it.id);
            }
        })
    })
    check.forEach((item, index) => {
        checkId[index] = [];
        item.forEach((it) => {
            checkId[index].push(it.id)
            if (it.pId === '1') {
                checkIndex.push(it.id);
            }
        })
    })
    all.forEach((item, index) => {
        item.forEach((it) => {
            let trueIndex = checkIndex.indexOf(allIndex[index]);
            if (trueIndex !== -1) {
                if (checkId[trueIndex].indexOf(it.id) === -1) {
                    it.checked = false
                } else {
                    it.checked = true
                }
            } else {
                it.checked = false
            }

        })
    })
    return all;
}

const ACTION_HANDLERS = {
    //loading
    [ACTIONS.USER_LOADING_STATE]: (state, action) => (
        Object.assign({}, state, {
            fetching: action.result
        })
    ),
    //modalLoading
    [ACTIONS.USER_MODAL_LOADING_STATE]: (state, action) => (
        Object.assign({}, state, {
            modalfetching: action.result
        })
    ),
    //获取列表
    [ACTIONS.USER_FETCH_LIST]: (state, action) => (
        Object.assign({}, state, {
            tablelist: action.result
        })
    ),
    //查看角色权限
    [ACTIONS.USER_VIEW_ROLE]: (state, action) => (
        Object.assign({}, state, {
            roleresult: {...action.result, tree: getTree(action.result.trees ? action.result.trees.data : [], true)}
        })
    ),
    //重置密码
    [ACTIONS.USER_RESET_PASSWORD]: (state, action) => (
        Object.assign({}, state, {
            resetpassword: action.result
        })
    ),
    //冻结用户
    [ACTIONS.USER_FROZE_USER]: (state, action) => (
        Object.assign({}, state, {
            frozeuser: action.result
        })
    ),
    //解冻用户
    [ACTIONS.USER_UNFROZE_USER]: (state, action) => (
        Object.assign({}, state, {
            unfrozeuser: action.result
        })
    ),
    //删除用户
    [ACTIONS.USER_DELETE_USER]: (state, action) => (
        Object.assign({}, state, {
            deleteuser: action.result
        })
    ),
    //请求角色列表
    [ACTIONS.USER_ROLE_LIST]: (state, action) => (
        Object.assign({}, state, {
            rolelist: action.result
        })
    ),
    //根据选中角色请求树
    [ACTIONS.USER_ADD_USER_TREE]: (state, action) => (
        Object.assign({}, state, {
            addUserTree: {
                ...action.result,
                tree: getRoleTree(action.result.data ? action.result.data : [], true),
                rootNode: action.result.data ? {
                    id: action.result.data[0].id,
                    pId: null,
                    name: "权限树",
                    open: true,
                    checked: true
                } : {
                    id: 1,
                    pId: null,
                    name: "权限树",
                    open: true,
                    checked: true
                }
            }
        })
    ),
    //清空树
    [ACTIONS.USER_DEL_USER_TREE]: (state, action) => (
        Object.assign({}, state, {
            addUserTree: action.result,
            editGetTree: action.result
        })
    ),
    //保存用户
    [ACTIONS.USER_SAVE_USER]: (state, action) => (
        Object.assign({}, state, {
            saveUser: action.result
        })
    ),
    //新增角色,查看权限树
    [ACTIONS.USER_READ_ROLE_TREE]: (state, action) => (
        Object.assign({}, state, {
            readRoleTree: {
                ...action.result,
                tree: getRoleTree(action.result.data ? action.result.data : []),
                rootNode: action.result.data ? {
                    id: action.result.data[0].id,
                    pId: null,
                    name: "权限树",
                    open: true,
                    checked: true
                } : {
                    id: 1,
                    pId: null,
                    name: "权限树",
                    open: true,
                    checked: true
                }
            }
        })
    ),
    //新增角色
    [ACTIONS.USER_ADD_ROLE]: (state, action) => (
        Object.assign({}, state, {
            saveRole: action.result
        })
    ),
    //新增角色
    [ACTIONS.USER_SAVE_EDIT_ID]: (state, action) => (
        Object.assign({}, state, {
            editId: action.result
        })
    ),
    //编辑角色-获取基础信息
    [ACTIONS.USER_EDIT_GET_CURRENT_USER]: (state, action) => (
        Object.assign({}, state, {
            editGetCurrentUser: action.result
        })
    ),
    //清空取基础信息
    [ACTIONS.USER_DEL_CURRENT_USER]: (state, action) => (
        Object.assign({}, state, {
            editGetCurrentUser: action.result
        })
    ),
    //编辑角色-获取选中角色
    [ACTIONS.USER_EDIT_GET_ROLE]: (state, action) => (
        Object.assign({}, state, {
            editGetRole: action.result
        })
    ),
    //编辑角色-获取树
    [ACTIONS.USER_EDIT_GET_TREE]: (state, action) => (
        Object.assign({}, state, {
            editGetTree: {
                ...action.result,
                tree: getCheckTree(action.result.allTree.data, action.result.checkTree.data, true),
                rootNode: action.result.allTree.data ? {
                    id: action.result.allTree.data[0].id,
                    pId: null,
                    name: "权限树",
                    open: true,
                    checked: true
                } : {
                    id: 1,
                    pId: null,
                    name: "权限树",
                    open: true,
                    checked: true
                }
            }
        })
    ),
    //编辑时保存Table条件
    [ACTIONS.USER_SAVE_TABLE_CONDITION]: (state, action) => (
        Object.assign({}, state, {
            tableCondition: action.result
        })
    ),
}

const initialState = {
    modalfetching: false,
    fetching: false,
    tablelist: [],
    roleresult: {},
    resetpassword: '',
    frozeuser: '',
    unfrozeuser: '',
    deleteuser: '',
    rolelist: [],
    addUserTree: [],
    saveUser: '',
    readRoleTree: [],
    saveRole: '',
    editId: '',
    editGetCurrentUser: {
        userName: '',
        account: '',
        password: '',
        email: '',
        phone: '',
        remark: ''
    },
    editGetRole: [],
    editGetTree: {},
    tableCondition: {
        enable: 1,
        account: '',
        pageNum: 1,
        pageSize: 10
    }
}

export function Reducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
}

export default Reducer