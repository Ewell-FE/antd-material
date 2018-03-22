import {take, put,call,fork} from 'redux-saga/effects'
import * as API from "../api"
import * as actions from '../actions';

//列表
function* fetchDictionaryList(){
    while(true){
        let postAction = yield take(actions.DICTIONARY_LIST_GET);
        yield put(actions.dictionaryLoadState(true))
        let posts =  yield call(API.fetchDicList,postAction.result);
        yield put(actions.dictionaryListSet(posts))
        yield put(actions.dictionaryLoadState(false))
    }
}

//新增或修改
function* fetchDictionaryListUpdate(){
    while(true){
        let postAction = yield take(actions.DICTIONARY_LIST_UPDATE_GET);
        yield put(actions.dictionaryLoadState(true))
        let callback = postAction.callback
        let posts =  yield call(API.fetchDicUpdateAndInsert,postAction.result);
       if(posts.httpCode === 200 || posts.httpCode === 400){
            if(callback) callback&&callback(posts)
           if(posts.httpCode === 400){
               yield put(actions.dictionaryLoadState(false))
           }
        }else{
            yield put(actions.dictionaryLoadState(false))
        }
        yield put(actions.dictionaryListUpdateSet(posts))
    }
}

//删除
function* fetchDictionaryListDel(){
    while(true){
        let postAction = yield take(actions.DICTIONARY_LIST_DELETE_GET);
        let callback = postAction.callback
        yield put(actions.dictionaryLoadState(true))
        yield put(actions.dictionaryListDelSet(true))
        let posts =  yield call(API.fetchDicDelete,postAction.result);
        if(posts.httpCode === 200 || posts.httpCode === 400){
            yield put(actions.dictionaryListDelSet(false))
            if(callback) callback&&callback(posts)
            if(posts.httpCode === 400){
                yield put(actions.dictionaryLoadState(false))
            }
        }else{
            yield put(actions.dictionaryLoadState(false))
        }
    }
}

//类型
function* fetchDictionaryListType(){
    while(true){
        let postAction = yield take(actions.DICTIONARY_TYPE_LIST_GET);
        yield put(actions.dictionaryLoadState(true))
        let posts =  yield call(API.fetchDicType,postAction.result);
        yield put(actions.dictionaryTypeListSet(posts))
    }
}

export default function* (){
    //列表
    yield fork(fetchDictionaryList);
    yield fork(fetchDictionaryListUpdate);
    yield fork(fetchDictionaryListDel);
    yield fork(fetchDictionaryListType);
}