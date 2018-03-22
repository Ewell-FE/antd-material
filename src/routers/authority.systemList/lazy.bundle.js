import reducers from './reducers';
import sagas from './sagas';
import view from './view';

import loginReducers from '../login/reducers';
import loginSaga from '../login/sagas';
export default {
    reducers: {systemList: reducers,login:loginReducers},
    sagas: {systemList: sagas,login:loginSaga},
    view: view
}

