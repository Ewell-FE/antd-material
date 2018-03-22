import reducers from './reducers';
import sagas from './sagas';
import view from './view';

export default {
    reducers: {dictionary: reducers},
    sagas: {dictionary: sagas},
    view: view
}

