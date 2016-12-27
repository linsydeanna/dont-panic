import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import incidentReducer from './incidentReducer';
import timerReducer from './timerReducer';


const rootReducer = combineReducers({
  incidents: incidentReducer,
  timer: timerReducer
  // routing: routerReducer
});

export default rootReducer;
