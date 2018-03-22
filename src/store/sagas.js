import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware();

export default sagaMiddleware;

export function injectAsyncSagas(store, sagas) {
    if (sagas) {
        for(let key in sagas){
            if (!store.asyncSagas[key]) {
                store.asyncSagas[key] = sagas[key];
                store.sagaMiddleware.run(sagas[key]);
            }
        }
    }
}