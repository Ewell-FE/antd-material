import reducers from './reducers';
import sagas from './sagas';
import view from './view';

export default {
    reducers: {login: reducers},
    sagas: {login: sagas},
    view: view
}

