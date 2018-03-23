import {call, put, take, fork, takeEvery} from 'redux-saga/effects'
import * as API from "../api"
import * as actions from '../actions'
//查看权限
export function* authorityMenuListByLoginNamePost() {
    while (true) {
        yield take('HOME_FETCH_COMPONENTS_START');
        let posts = yield call(API.getComponents);
        yield put(actions.getAuthMenuList(posts))
    }
}
export default function*() {
    yield fork(authorityMenuListByLoginNamePost)
    yield *takeEvery('*', function () {
        console.log("logger~~")
    })
}
