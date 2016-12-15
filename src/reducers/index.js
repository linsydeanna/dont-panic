import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import incidentReducer from './incidentReducer';


const rootReducer = combineReducers({
  incidents: incidentReducer
  // routing: routerReducer
});

export default rootReducer;
