import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/createStore'
import {Provider} from 'react-redux'
import App from './App';
import moment from 'moment'
import 'moment/locale/zh-cn';
moment.locale('zh-cn')
// ========================================================
// Store Instantiation
// ========================================================
const initialState = window.___INITIAL_STATE__ || {};
const factory = createStore(initialState);

ReactDOM.render(
    <Provider store={factory.store}>
        <App history={factory.history}/>
    </Provider>,
    document.getElementById('root'));
