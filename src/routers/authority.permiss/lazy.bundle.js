import reducers from './reducers';
import sagas from './sagas';
import view from './view';

export default {
    reducers: {permiss: reducers},
    sagas: {permiss: sagas},
    view: view
}

