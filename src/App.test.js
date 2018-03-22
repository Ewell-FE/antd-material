import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/createStore'
import {Provider} from 'react-redux'
import App from './App';


const initialState = window.___INITIAL_STATE__ || {};
const factory = createStore(initialState);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={factory.store}>
            <App history={factory.history}/>
        </Provider>, div);
});