import LoginReducers from '../main/reducers';
import LoginSagas from '../main/sagas';
import reducers from './reducers';
import sagas from './sagas';
import view from './view';

export default {
    reducers: {home: reducers, main: LoginReducers},
    sagas: { home: sagas, main: LoginSagas},
    view: view
}

