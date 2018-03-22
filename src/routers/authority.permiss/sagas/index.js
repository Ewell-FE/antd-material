import {take, put,call,fork} from 'redux-saga/effects'
import * as API from "../api"
import * as actions from '../actions';
import Message from "@/components/Message"

//authForm表格
export function* permissAuthFormInit () {
    while(true){
        let postAction = yield take(actions.PERMISS_AUTH_FORM);
        yield put(actions.getPermissAuthFormList(postAction.result));
    }
}
//树
export function* permissTreeListPost () {
    while(true){
        let postAction = yield take(actions.PERMISS_TREE_LIST);
        yield put(actions.getPermissTreeLoad(true))
        let posts =  yield call(API.fetchPermissTreeListApi,postAction.result);
        //初始化树列表
        if(postAction.callBack){
            postAction.callBack(posts.data)
        }
        yield put(actions.getPermissTreeList(posts))
        yield put(actions.getPermissTreeLoad(false))
    }
}
//新增或编辑(系统，页面，菜单)
export function* permissAddOrEditPost () {
    while(true){
        let postAction = yield take(actions.PERMISS_ADD_OR_EDIT);
        yield put(actions.getPermissTreeLoad(true))
        let posts =  yield call(API.fetchPermissAddOrEditApi,postAction.result);
        if(posts.httpCode === 200){
            postAction.callBack(posts);
            yield put(actions.getPermissAddOrEdit(posts))
        }else if(posts.httpCode === 400){
            postAction.callBack(posts);
            yield put(actions.getPermissAddOrEdit(posts.data))
            yield put(actions.getPermissTreeLoad(false))
        }else{
            yield put(actions.getPermissTreeLoad(false))
            Message.error(posts.msg)
            // alert(posts.msg);
        }
    }
}
//删除(系统，页面，菜单)
export function* permissDeletePost () {
    while(true){
        let postAction = yield take(actions.PERMISS_DELETE);
        yield put(actions.getPermissTreeLoad(true))
        let posts =  yield call(API.fetchPermissDeleteApi,postAction.result);
        if(posts.httpCode === 200){
            postAction.callBack(posts);
            yield put(actions.getPermissTreeLoad(false))
            yield put(actions.getPermissDelete(posts))
        }else{
            yield put(actions.getPermissTreeLoad(false))
            Message.error(posts.msg)
        }
    }
}
//查看操作权限（下拉框）
export function* permissOperationListPost () {
    while(true){
        let postAction = yield take(actions.PERMISS_OPERATION_LIST_SETPARAM);
        yield put(actions.getPermissOperationLoad(true))
        let posts =  yield call(API.fetchPermissOperationApi,postAction.result);
        yield put(actions.getPermissOperationList(posts.data));
        yield put(actions.getPermissOperationLoad(false))
    }
}
//新增操作权限(已有)
export function* permissOperationAddTable() {
    while(true){
        let postAction = yield take(actions.PERMISS_OPERATION_ADD_TABLE);
        yield put(actions.getPermissOperationLoad(true))
        let posts =  yield call(API.fetchPermissOperationAddTableApi,postAction.result);
        if(posts.httpCode === 200){
            postAction.callBack()
        }else{
            yield put(actions.getPermissOperationLoad(false))
            Message.error(posts.msg)
        }
        yield put(actions.getPermissOperationAddTable(posts));
    }
}

//操作权限table
export function* permissOperationTableList() {
    while(true){
        let postAction = yield take(actions.PERMISS_OPERATION_LIST_TABLE_SET);
        yield put(actions.getPermissOperationLoad(true))
        let posts =  yield call(API.fetchPermissOperationTableApi,postAction.result);
        yield put(actions.getPermissOperationTableList(posts.data))
        yield put(actions.getPermissOperationLoad(false))
    }
}

//新增操作权限(自定义)
export function* permissOperationAdd() {
    while(true){
        let postAction = yield take(actions.PERMISS_OPERATION_ADD);
        yield put(actions.getPermissOperationLoad(true))
        let posts =  yield call(API.fetchPermissOperationAddApi,postAction.result);
        if(posts.httpCode === 200){
            postAction.callBack(posts);
            yield put(actions.getPermissOperationAdd(posts));
        }else if(posts.httpCode === 400){
            postAction.callBack(posts);
            yield put(actions.getPermissOperationAdd(posts));
            yield put(actions.getPermissOperationLoad(false))
        }else{
            yield put(actions.getPermissOperationLoad(false))
            Message.error(posts.msg)
        }
    }
}

//操作权限删除
export function* permissOperationDelete() {
    while(true){
        let postAction = yield take(actions.PERMISS_OPERATION_DELETE);
        yield put(actions.getPermissOperationLoad(true))
        let posts =  yield call(API.fetchPermissOperationDeleteApi,postAction.result);
        if(posts.httpCode === 200){
            postAction.callBack();
            yield put(actions.getPermissOperationDel(posts));
            yield put(actions.getPermissOperationLoad(false))
        }else{
            yield put(actions.getPermissOperationLoad(false))
            Message.error(posts.msg)
            // alert(posts.msg);
        }
    }
}

//数据权限列表获取
export function* permissDataAuthList() {
    while(true){
        let postAction = yield take(actions.PERMISS_DATAAUTH_LIST_SET);
        yield put(actions.getPermissDataAuthLoad(true))
        let posts =  yield call(API.fetchPermissDataAuthListApi,postAction.result);
        if(posts.httpCode === 200){
            if(postAction.callBack){
                postAction.callBack(posts.data)
                yield put(actions.getPermissDataAuthLoad(false))
            }
            yield put(actions.getPermissDataAuthList(posts.data));
        }else{
            yield put(actions.getPermissDataAuthLoad(false))
            Message.error(posts.msg)
            // alert(posts.msg)
        }
    }
}
//数据权限测试
export function* permissDataAuthListTest() {
    while(true){
        let postAction = yield take(actions.PERMISS_DATAAUTH_TEST);
        yield put(actions.getPermissDataAuthLoad(true))
        let posts =  yield call(API.fetchPermissDataAuthTestApi,postAction.result.params);
        if(posts.httpCode === 200){
            postAction.callBack(posts)
            yield put(actions.getPermissDataAuthTest(posts.data))
            if(typeof (posts.data) === 'string'){
                yield put(actions.getPermissDataAuthLoad(false))
            }else{
                if(postAction.result.load){
                    yield put(actions.getPermissDataAuthLoad(false))
                }else{
                    yield put(actions.getPermissDataAuthLoad(true))
                }
            }
        }else{
            yield put(actions.getPermissDataAuthLoad(false))
            Message.error(posts.msg)
            // alert(posts.msg)
        }
    }
}
//数据权限---新增，编辑
export function* permissDataAuthListUpdate() {
    while(true){
        let postAction = yield take(actions.PERMISS_DATAAUTH_UPDATE);
        let posts =  yield call(API.fetchPermissDataAuthUpdateApi,postAction.result);
        if(posts.httpCode === 200){
            postAction.callBack(posts)
            yield put(actions.getPermissDataAuthAdd(posts));
        }else if(posts.httpCode === 400){
            postAction.callBack(posts)
            yield put(actions.getPermissDataAuthLoad(false))
        }else{
            yield put(actions.getPermissDataAuthLoad(false))
            Message.error(posts.msg)
        }
    }
}
//数据权限删除
export function* permissDataAuthListDelete() {
    while(true){
        let postAction = yield take(actions.PERMISS_DATAAUYH_DELETE);
        yield put(actions.getPermissDataAuthLoad(true))
        let posts =  yield call(API.fetchPermissDataAuthDelApi,postAction.result);
        if(posts.httpCode === 200){
            postAction.callBack(posts)
            yield put(actions.getPermissDataAuthLoad(false))
            yield put(actions.getPermissOperationLoad(false))
        }else{
            yield put(actions.getPermissDataAuthLoad(false))
            Message.error(posts.msg)
            // alert(posts.msg)
        }
    }
}
export default function* (){
    yield fork(permissAuthFormInit)
    yield fork(permissTreeListPost)
    yield fork(permissAddOrEditPost)
    yield fork(permissOperationListPost)
    yield fork(permissOperationAdd)
    yield fork(permissOperationAddTable)
    yield fork(permissOperationTableList)
    yield fork(permissOperationDelete)
    yield fork(permissDataAuthList)
    yield fork(permissDeletePost)
    yield fork(permissDataAuthListTest)
    yield fork(permissDataAuthListUpdate)
    yield fork(permissDataAuthListDelete)
}