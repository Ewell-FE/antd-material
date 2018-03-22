import LoginReducers from '../login/reducers';
import LoginSagas from '../login/sagas';
import reducers from './reducers';
import sagas from './sagas';
import view from './view';

export default {
    reducers: {home: reducers, login: LoginReducers},
    sagas: { home: sagas, login: LoginSagas},
    view: view
}

