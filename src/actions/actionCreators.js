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
