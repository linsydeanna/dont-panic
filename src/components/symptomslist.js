import React, { Component } from 'react';

class SymptomsList extends Component {
  constructor() {
    super();
    this.state = {
      symptomsArray: []
    }
  }

  handleChange(symptomClicked) {
    this.state.symptomsArray.push(symptomClicked);
    this.props.addSymptoms(this.state.symptomsArray);
  }

  render() {

      const symptoms = ['Nausea', 'Sweating', 'Dizziness', 'Shortness of Breath', 'Faintness', 'Light-headedness', 'Chest pain', 'Tingling sensations', 'Hot flashes', 'Cold flashes', 'Hyperventilation', 'Heart palpitations']

    return (
      <div className="Symptoms">

      {symptoms.map((symptom) =>
        <div  className="Symptom" key={symptom}><input type="checkbox" id={symptom} onChange={() => this.handleChange(symptom)}/> <label htmlFor={symptom}>{symptom}</label></div>
      )}

      </div>
    );
  }
}

export default SymptomsList;
