import {take, put,call,fork} from 'redux-saga/effects'
import * as API from "../api"
import * as actions from '../actions';
import * as loginAPI from '../../login/api'
import {push} from 'react-router-redux'
import Message from '@/components/Message'
var cookieStore = require('store')

//系统展示(权限)列表
export function* systemListPost () {
    while(true){
        let postAction = yield take(actions.SYSTEMREPRESENT_LIST_GET);
        yield put(actions.getSystemListLoad(true))
        if(postAction.result.loginParams){//地址栏中带参须重新登录
            let loginResult = yield call(loginAPI.fetchLoginApi,postAction.result.loginParams);
            if(loginResult.httpCode === 200){
                yield put(actions.getSystemRepresentList(posts.data))
                yield call(API.fetchSystemRepresentList,{id:cookieStore.get("userInfo").id});
            }else{
                yield put(actions.getSystemRepresentList(posts.data))
                Message.error('登录失败')
            }
        }else{
            let posts =  yield call(API.fetchSystemRepresentList,{id:cookieStore.get("userInfo").id});
            yield put(actions.getSystemRepresentList(posts.data))
        }
        yield put(actions.getSystemListLoad(false))
    }
}

//注销
export function* systemListLogOutPost () {
    while(true){
        yield take(actions.SYSTEMLIST_LOGOUT_SUCCESS);
        yield put(actions.getSystemListLoad(true))
        let posts =  yield call(API.fetchSystemListLogOut,{});
        if(posts.httpCode === 200){
            yield put(push('/authority/login'));
            cookieStore.clearAll();
        }else{
            Message.error('注销失败')
        }
        yield put(actions.getSystemListLoad(false))
    }
}
//修改密码
export function* systemListUpdatePasswordPost () {
    while(true){
        let postAction = yield take(actions.SYSTEMLIST_UPDATE_PASSWORD);
        yield put(actions.getSystemListLoad(true))
        let posts =  yield call(API.fetchSystemListUpdataPassword,postAction.result);
        postAction.callBack(posts);
        yield put(actions.getSystemListLoad(false))
        yield put(actions.systemListUpdatePassword(posts))
    }
}
export default function* (){
    yield fork(systemListPost);
    yield fork(systemListLogOutPost);
    yield fork(systemListUpdatePasswordPost)
}