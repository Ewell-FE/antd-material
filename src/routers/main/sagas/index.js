import {take, put, call,fork} from 'redux-saga/effects'
import {push} from 'react-router-redux'
import * as API from "../api"
import * as actions from '../actions'
var cookieStore = require('store')

export function* logining() {
    while (true) {
        let action = yield take(actions.LOGIN_CLICK_BUTTON_SUBMIT)
        yield put(actions.changeLoginState(true))
        let result = yield call(API.fetchLoginApi, action.result.parms)
        //todo:保存session
        if(result.httpCode === 200){
            yield put(actions.importUserInfo(result));
            cookieStore.set('userInfo',result.data)
            yield put(push("/material/docs"));
            yield put(actions.changeLoginState(false))
        }else{
            action.callBack(result);
            yield put(actions.changeLoginState(false))
        }
    }
}

export default function* () {
    yield fork(logining);
}