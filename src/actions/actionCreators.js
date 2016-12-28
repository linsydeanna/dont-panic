export const addSymptoms = (symptoms) => {
  return {
    type: 'ADD_SYMPTOMS',
    symptoms
  }
}

export const addSeverity = (rating) => {
  return {
    type: 'ADD_SEVERITY',
    rating
  }
}

export const addDuration = (duration) => {
  return {
    type: 'ADD_DURATION',
    duration
  }
}

export const addStart = (durationStart) => {
  return {
    type: 'ADD_START',
    durationStart
  }
}
