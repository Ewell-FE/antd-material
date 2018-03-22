import reducers from './reducers';
import sagas from './sagas';
import view from './view';

export default {
    reducers: {start: reducers},
    sagas: {start: sagas},
    view: view
}

