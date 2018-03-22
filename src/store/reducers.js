import {combineReducers} from 'redux';

export default function createReducer(asyncReducers) {
    const reducers = {
        ...asyncReducers
    };
    return combineReducers(reducers);
}

export const injectReducer = (store, keyValues) => {
    for (let key in keyValues) {
        if (!store.asyncReducers[key]) {
            store.asyncReducers[key] = keyValues[key];
        }
    }
    store.replaceReducer(createReducer(store.asyncReducers))
}