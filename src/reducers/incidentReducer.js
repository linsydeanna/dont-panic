import incidents from '../reducers/incidentReducer';

function incidentReducer(state = incidents, action) {
  switch(action.type) {
    case 'ADD_SYMPTOMS':
      return {
        ...state,
        symptoms: action.symptoms
      }
    case 'ADD_SEVERITY':
      return {
        ...state,
        severity: action.rating
      }
    case 'ADD_DURATION':
      return {
        ...state,
        duration: action.duration
      }
    default:
      return state;
  }
  return state;
}

export default incidentReducer;
