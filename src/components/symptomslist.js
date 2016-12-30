import React, { Component } from 'react';

class SymptomsList extends Component {
  constructor() {
    super();
    this.state = {
      symptomsArray: []
    };
  }

  handleClick(symptomClicked) {
    const { symptomsArray } = this.state;
    if (symptomsArray.includes(symptomClicked)) {
      this.setState({
        symptomsArray: symptomsArray.filter(symptom => symptom !== symptomClicked)
      })
      this.props.deleteSymptoms(symptomClicked)
    } else {
      symptomsArray.push(symptomClicked)
      this.props.addSymptoms(symptomsArray);
    }
  }
  render() {
    const symptoms = ['Nausea', 'Sweating', 'Dizziness', 'Shortness of Breath', 'Faintness', 'Light-headedness', 'Chest pain', 'Tingling sensations', 'Hot flashes', 'Cold flashes', 'Hyperventilation', 'Heart palpitations']
    return (
      <div className="Symptoms">
        {symptoms.map((symptom) =>
          <div className="Symptom" key={symptom} onClick={() => this.handleClick(symptom)}>
            {this.state.symptomsArray.includes(symptom) ?
              <span className="fa fa-check" name="check" style={{ color: "white" }} ></span> :
              <span className="fa fa-check" name="check" style={{ color: "#272635" }} ></span>
            }
            <p>{symptom}</p>
          </div>
        )}
      </div>
    );
  }
}

export default SymptomsList;
