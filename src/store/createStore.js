import {applyMiddleware, compose, createStore} from 'redux'
import {routerReducer, routerMiddleware} from 'react-router-redux'
import {reducer as formReducer} from 'redux-form'
import createHistory from 'history/createBrowserHistory'
import  createSagas  from './sagas'
import createReducer from './reducers'

export const sagaMiddleware = createSagas;

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()
// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)
export default (initialState) => {
    // ======================================================
    // Store Enhancers
    // ======================================================
    const enhancers = []
    if (process.env.NODE_ENV === "development") {
        const devToolsExtension = window.devToolsExtension
        if (typeof devToolsExtension === 'function') {
            enhancers.push(devToolsExtension())
        }
    }

    var store = createStore(
        createReducer({
            router: routerReducer
        }),
        initialState,
        compose(
            applyMiddleware(middleware, sagaMiddleware),
            ...enhancers
        )
    )
    store.asyncReducers = {router: routerReducer, form: formReducer};
    store.asyncSagas = {};
    store.sagaMiddleware = sagaMiddleware;
    return {store, history};
}