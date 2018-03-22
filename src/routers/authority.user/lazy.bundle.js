import reducers from './reducers';
import sagas from './sagas';
import view from './view';

export default {
    reducers: {user: reducers},
    sagas: {user: sagas},
    view: view
}

