import timer from '../reducers/incidentReducer';

function timerReducer(state = timer, action) {
  switch(action.type) {
    case 'ADD_START':
      return {
        ...state,
        start: action.duration
      }
      default:
        return state;
    }
  console.log("state is ", state)
  console.log("action is ", action)
  return state;
}

export default timerReducer;
