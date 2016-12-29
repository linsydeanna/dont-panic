import React, { Component } from 'react';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class SymptomsList extends Component {
  constructor() {
    super();
    this.state = {
      symptomsArray: [],
      symptomColor: {
        color: "#272635"
      }
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
      <div>
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

        <button onClick={() => this.showAlert()}>Show Alert</button>
      </div>
    );
  }
}

export default SymptomsList;
