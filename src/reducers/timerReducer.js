import timer from '../reducers/incidentReducer';

function timerReducer(state = timer, action) {
  switch(action.type) {
    case 'ADD_START':
      return {
        ...state,
        start: action.durationStart
      }
      default:
        return state;
    }
  return state;
}

export default timerReducer;
