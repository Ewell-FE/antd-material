//loading
export const DICTIONARY_LOADING_STATE = 'DICTIONARY_LOADING_STATE'
export function dictionaryLoadState(result) {
    return {
        type: DICTIONARY_LOADING_STATE,
        result
    }
}
//列表数据
export const DICTIONARY_LIST_GET = "DICTIONARY_LIST_GET"
export function dictionaryListGet(result){
    return {
        type:DICTIONARY_LIST_GET,
        result
    }
}
export const DICTIONARY_LIST_SET = "DICTIONARY_LIST_SET"
export function dictionaryListSet(result){
    return {
        type:DICTIONARY_LIST_SET,
        result
    }
}

//新增或修改数据
export const DICTIONARY_LIST_UPDATE_GET = "DICTIONARY_LIST_UPDATE_GET"
export function dictionaryListUpdateGet(result,callback){
    return {
        type:DICTIONARY_LIST_UPDATE_GET,
        result,
        callback
    }
}
export const DICTIONARY_LIST_UPDATE_SET = "DICTIONARY_LIST_UPDATE_SET"
export function dictionaryListUpdateSet(result){
    return {
        type:DICTIONARY_LIST_UPDATE_SET,
        result
    }
}

//删除数据
export const DICTIONARY_LIST_DELETE_GET = "DICTIONARY_LIST_DELETE_GET"
export function dictionaryListDelGet(result,callback){
    return {
        type:DICTIONARY_LIST_DELETE_GET,
        result,
        callback
    }
}

export const DICTIONARY_LIST_DELETE_SET = "DICTIONARY_LIST_DELETE_SET"
export function dictionaryListDelSet(result,callback){
    return {
        type:DICTIONARY_LIST_DELETE_SET,
        result,
        callback
    }
}


//类型数据获取
export const DICTIONARY_TYPE_LIST_GET = "DICTIONARY_TYPE_LIST_GET"
export function dictionaryTypeListGet(result){
    return {
        type:DICTIONARY_TYPE_LIST_GET,
        result
    }
}
export const DICTIONARY_TYPE_LIST_SET = "DICTIONARY_TYPE_LIST_SET"
export function dictionaryTypeListSet(result){
    return {
        type:DICTIONARY_TYPE_LIST_SET,
        result
    }
}