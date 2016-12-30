import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import * as actionCreators from '../actions/actionCreators';
import { bindActionCreators } from 'redux';
import SymptomsList from './symptomslist';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class Symptoms extends Component {
  showAlert = () => {
    if (this.props.incidents.symptoms === undefined || !this.props.incidents.symptoms.length) {
      Alert.info('Whoops! You forgot to select at least one symptom.', {
          position: 'bottom-left',
          effect: 'slide',
          timeout: 3000
      });
    } else {
      browserHistory.push("/breathing")
    }
  }
  render() {
    const { dispatch } = this.props;
    const addSymptoms = bindActionCreators(actionCreators.addSymptoms, dispatch);
    const deleteSymptoms = bindActionCreators(actionCreators.deleteSymptoms, dispatch);
    return (
      <div>
      <h1>Select your symptoms</h1>
      <div>
        <SymptomsList addSymptoms={addSymptoms} deleteSymptoms={deleteSymptoms} />
      </div>
      <div className="SegmentLink" onClick={() => this.showAlert()}>
        <p>Continue</p>
      </div>
      <Alert stack={{limit: 1}} />
      </div>
    );
  }
}

export default Symptoms;
