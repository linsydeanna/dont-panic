import { createStore } from 'redux';
// import { syncHistoryWithStore } from 'react-router-redux';
// import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';

import incidents from './incidents';
import timer from './timer'


const defaultState = {
  incidents, timer
};

const store = createStore(rootReducer, defaultState);

// export const history = syncHistoryWithStore(browserHistory, store);

export default store;
