import React, { Component } from 'react';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class SymptomsList extends Component {
  constructor() {
    super();
    this.state = {
      symptomsArray: []
    };
  }

  showAlert = () => {
      Alert.error('Whoops! You forgot to select at least one symptom.', {
        position: 'bottom-left',
        effect: 'slide',
        timeout: 3000
      });
  }

  handleClick(symptomClicked) {
    this.state.symptomsArray.push(symptomClicked);
    this.props.addSymptoms(this.state.symptomsArray);
  }

  render() {

    const symptoms = ['Nausea', 'Sweating', 'Dizziness', 'Shortness of Breath', 'Faintness', 'Light-headedness', 'Chest pain', 'Tingling sensations', 'Hot flashes', 'Cold flashes', 'Hyperventilation', 'Heart palpitations']

    return (
      <div>
      <div className="Symptoms">
        {symptoms.map((symptom) =>
          <div className="Symptom" key={symptom} onClick={() => this.handleClick(symptom)}>
              <span className="fa fa-check" name="check" style={{ color: "white" }} ></span>
            <p>{symptom}</p>
          </div>
        )}
      </div>

        <button onClick={() => this.showAlert()}>Show Alert</button>
      </div>
    );
  }
}

export default SymptomsList;
