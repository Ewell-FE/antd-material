import {take, put,call,fork} from 'redux-saga/effects'
import * as API from "../api"
import * as actions from '../actions';
import Message from '@/components/Message'
//获取列表
export function* userFetchList () {
    while(true){
        let postAction = yield take(actions.USER_FETCH_LIST);
        yield put(actions.userLodaing(true));
        let posts =  yield call(API.fetchListApi,postAction.result);
        yield put(actions.userFentchList(posts));
        yield put(actions.userLodaing(false));
    }
}
//查看角色权限
export function* userViewRole () {
    while(true){
        let postAction = yield take(actions.USER_VIEW_ROLE);
        yield put(actions.userModalLodaing(true));
        let [roles, trees] = yield [
            call(API.fetchViewRoleApi,postAction.result),
            call(API.fetchViewRoleTreeApi,postAction.result)
        ]
        yield put(actions.userViewRole({roles:{...roles},trees:{...trees}}));
        postAction.callBack();
        yield put(actions.userModalLodaing(false));
    }
}
//重置密码
export function* userResetPassWord () {
    while(true){
        let postAction = yield take(actions.USER_RESET_PASSWORD);
        let posts =  yield call(API.resetPassWordApi,postAction.result);
        yield put(actions.userResetPassword(posts));
        if(posts.httpCode === 200){
            Message.success("重置密码成功")
        }else{
            Message.error("重置密码失败")
        }
        postAction.callBack();
    }
}
//冻结用户
export function* userFrozeUser () {
    while(true){
        let postAction = yield take(actions.USER_FROZE_USER);
        let posts =  yield call(API.frozeUserApi,postAction.result);
        yield put(actions.userFrozeUser(posts));
        postAction.callBack();
        if(posts.httpCode === 200){
            Message.success("操作成功")
        }else{
            Message.error("操作失败")
        }
    }
}
//解冻用户
export function* userUnfrozeUser () {
    while(true){
        let postAction = yield take(actions.USER_UNFROZE_USER);
        let posts =  yield call(API.unfrozeUserApi,postAction.result);
        yield put(actions.userUnfrozeUser(posts));
        postAction.callBack();
        if(posts.httpCode === 200){
            Message.success("操作成功")
        }else{
            Message.error("操作失败")
        }
    }
}
//删除用户
export function* userDeleteUser () {
    while(true){
        let postAction = yield take(actions.USER_DELETE_USER);
        let posts =  yield call(API.deleteUserApi,postAction.result);
        yield put(actions.userDeleteUser(posts));
        postAction.callBack();
        if(posts.httpCode === 200){
            Message.success("删除成功")
        }else{
            Message.error("删除失败")
        }
    }
}
//请求角色列表
export function* userFetchRoleList () {
    while(true){
        let postAction = yield take(actions.USER_ROLE_LIST);
        let callback = postAction.callback
        let posts =  yield call(API.fentchRoleListApi,postAction.result);
        yield put(actions.userFentchRoleList(posts));
        if(callback) callback && callback()
    }
}
//根据选中角色请求树
export function* userAddUserTree () {
    while(true){
        let postAction = yield take(actions.USER_ADD_USER_TREE);
        yield put(actions.userLodaing(true));
        let posts =  yield call(API.fentchAddUserTreeApi,postAction.result);
        yield put(actions.userAddUserTree(posts));
        postAction.callBack()
        yield put(actions.userLodaing(false));
    }
}
//清空树
export function* userDelUserTree () {
    while(true){
        yield take(actions.USER_DEL_USER_TREE);
        yield put(actions.userDelUserTree({}));
    }
}
//保存用户
export function* userSaveUser () {
    while(true){
        let postAction = yield take(actions.USER_SAVE_USER);
        yield put(actions.userLodaing(true));
        //判断是新增还是编辑,传入参数中id有值则为编辑
        let id='';
        if(postAction.result.id){
            id=postAction.result.id;
            yield call(API.saveUserUpdateApi,{...postAction.result.form,id:id});
        }else {
            //第一步获注册用户获取Id
            let posts =  yield call(API.saveUserApi,postAction.result.form);
            if(posts.httpCode!==424){
                id=posts.data.id;
            }else{
                yield put(actions.userLodaing(false));
                postAction.message(posts.msg);
            }
        }
        if(id){
            if(postAction.result.roles.length>0){
                //第二步更新用户对应的角色
                let arr=[],tree=[],dataTree=[];
                postAction.result.roles.forEach((item)=>{
                    arr.push({
                        "enable": 1,
                        "roleId":item,
                        "userId": id
                    })
                })
                //第三步更新树
                postAction.result.trees.forEach((item)=>{
                    item.forEach((it)=>{
                        //判断刨除数据权限的节点
                        if(it.checked){
                            if(it.trueName){
                                //判断为数据节点新增的节点
                                dataTree.push({
                                    "enable": 1,
                                    "menuId": it.truePid,
                                    "paramId":it.paramId,
                                    "paramKey": it.paramKey,
                                    "paramValue": it.trueName,
                                    "userId": id
                                })
                            }else{
                                if(it.truePid){
                                    //判断为操作权限的节点
                                    tree.push({
                                        "enable": 1,
                                        "menuId": it.truePid,
                                        "permission": it.code,
                                        "userId": id
                                    })
                                }else{
                                    if(it.flag!=='fakeParent'){
                                        tree.push({
                                            "enable": 1,
                                            "menuId": it.id,
                                            "permission": "",
                                            "userId": id
                                        })
                                    }
                                }
                            }

                        }
                        else{
                            if(it.trueName){
                                //判断为数据节点删除的节点
                                dataTree.push({
                                    "enable": 1,
                                    "menuId": it.truePid,
                                    "userId": id
                                })
                            }
                        }

                    })
                })
                yield call(API.saveUserRoleApi,{list:arr});
                yield call(API.saveUserPermissionApi,{list:tree});
                let dataTrees=yield call(API.saveUserDataPermissionApi,{list:dataTree});
                yield put(actions.userSaveUser(dataTrees));
                if(dataTrees.httpCode === 200){
                    Message.success("保存成功")
                }else{
                    Message.error("保存失败")
                }
            }else{
                let result = postAction.result;
                yield call(API.saveUserRoleApi,{list:{enable:1,userId:result.id}});
                yield call(API.saveUserPermissionApi,{list:{userId:result.id,enable:1}});
                let dataTrees=yield call(API.saveUserDataPermissionApi,{list:{userId:result.id,enable:1}});
                yield put(actions.userSaveUser(dataTrees));
                if(dataTrees.httpCode === 200){
                    Message.success("保存成功")
                }else{
                    Message.error("保存失败")
                }
            }
            yield put(actions.userLodaing(false));
            postAction.callBack();
        }

    }
}
//新增角色查看权限树
export function* userReadRoleTree () {
    while(true){
        let postAction = yield take(actions.USER_READ_ROLE_TREE);
        yield put(actions.userModalLodaing(true));
        let posts =  yield call(API.fentchReadRoleTreeApi,postAction.result);
        yield put(actions.userReadRoleTree(posts));
        yield put(actions.userModalLodaing(false));
    }
}
//新增角色保存角色
export function* userAddRole () {
    while(true){
        //第一步获注册角色获取Id
        let postAction = yield take(actions.USER_ADD_ROLE);
        yield put(actions.userModalLodaing(true));
        let posts =  yield call(API.saveRoleApi,postAction.result.form);
        let id='';
        if(posts.httpCode!==400){
            id=posts.data.id;
        }else{
            yield put(actions.userModalLodaing(false));
            postAction.message(posts.msg);

        }
        if(id){
            //第二步更新树
            let tree=[],dataTree=[];
            postAction.result.trees.forEach((item)=>{
                item.forEach((it)=>{
                    if(it.checked){
                        if(it.trueName){
                            //判断为数据节点新增的节点
                            dataTree.push({
                                "enable": 1,
                                "menuId": it.truePid,
                                "paramKey": it.paramKey,
                                "paramId":it.paramId,
                                "paramValue": it.trueName,
                                "roleId": id
                            })
                        }else{
                            if(it.truePid){
                                tree.push({
                                    "enable": 1,
                                    "menuId": it.truePid,
                                    "permission": it.code,
                                    "roleId": id
                                })
                            }else{
                                if(it.flag!=='fakeParent'){
                                    tree.push({
                                        "enable": 1,
                                        "menuId": it.id,
                                        "permission": "",
                                        "roleId": id
                                    })
                                }
                            }
                        }

                    }



                })
            })
            let addResult=yield call(API.saveRolePermissionApi,{list:tree})
            //第三步数据权限
            yield call(API.saveUserDataPermissionApi,{list:dataTree});
            yield put(actions.userAddRole(addResult))
            postAction.callBack();
            let roles=yield call(API.fentchRoleListApi,{});
            yield put(actions.userFentchRoleList(roles));
            yield put(actions.userModalLodaing(false));
            if(addResult.httpCode === 200){
                Message.success("保存成功")
            }else{
                Message.error("保存失败")
            }

        }


    }
}
//保存编辑Id
export function* userSaveEditId () {
    while(true){
        let id=yield take(actions.USER_SAVE_EDIT_ID);
        yield put(actions.userSaveEditId(id));
    }
}
//编辑角色-获取用户信息
export function* editGetUser () {
    while(true){
        let postAction = yield take(actions.USER_EDIT_GET_CURRENT_USER);
        yield put(actions.userLodaing(true));
        let posts =  yield call(API.editGetCurrentUserApi,postAction.result);
        yield put(actions.userEditGetCurrentUser({
            'userName':posts.data.userName,
            'account':posts.data.account,
            'password':posts.data.password,
            'email':posts.data.email,
            'phone':posts.data.phone,
            'remark':posts.data.remark
        }))
    }
}
//清空表单
export function* userDelCurrentUser () {
    while(true){
        yield take(actions.USER_DEL_CURRENT_USER);
        yield put(actions.userDelCurrentUser({
            'userName':'',
            'account':'',
            'password':'',
            'email':'',
            'phone':'',
            'remark':''
        }));
    }
}
//编辑角色-获取用户角色
export function* editGetRole () {
    while(true){
        let postAction = yield take(actions.USER_EDIT_GET_ROLE);
        yield put(actions.userLodaing(true));
        let posts =  yield call(API.editGetRoleApi,postAction.result);
        let roles=[];
        posts.data.forEach((item)=>{
            roles.push(item.roleId)
        })
        yield put(actions.userEditGetRole(roles));
        yield put(actions.userLodaing(true));
        let arr=[]
        roles.forEach((item)=>{
            arr.push({
                'roleId':item
            })
        })
        let allTree=yield call(API.fentchAddUserTreeApi,{list:arr});
        let checkTree=yield call(API.fetchViewRoleTreeApi,postAction.result);
        yield put(actions.userEditGetTree({allTree:allTree,checkTree:checkTree}));
        postAction.callBack()
        yield put(actions.userLodaing(false));
    }
}
//保存table条件
export function* editTableCondition () {
    while(true){
        let postAction=yield take(actions.USER_SAVE_TABLE_CONDITION);
        yield put(actions.userSaveTableCondition(postAction.result));
    }
}
export default function* (){
    yield fork(userFetchList)
    yield fork(userViewRole)
    yield fork(userResetPassWord)
    yield fork(userFrozeUser)
    yield fork(userUnfrozeUser)
    yield fork(userDeleteUser)
    yield fork(userFetchRoleList)
    yield fork(userAddUserTree)
    yield fork(userDelUserTree)
    yield fork(userSaveUser)
    yield fork(userReadRoleTree)
    yield fork(userAddRole)
    yield fork(userSaveEditId)
    yield fork(editGetUser)
    yield fork(editGetRole)
    yield fork(userDelCurrentUser)
    yield fork(editTableCondition)

}