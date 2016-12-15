import React, { Component } from 'react';
import {Link} from 'react-router';
import * as actionCreators from '../actions/actionCreators';
import { bindActionCreators } from 'redux';
import SymptomsList from './symptomslist';

class Symptoms extends Component {
  render() {

    const { dispatch } = this.props;
    const addSymptoms = bindActionCreators(actionCreators.addSymptoms, dispatch);

    return (
      <div className="Exercise">
      <div>Select your symptoms.</div>
      <div className="Symptoms">
        <SymptomsList addSymptoms={addSymptoms} />
      </div>
      <Link to="/breathing">Continue</Link>
      </div>
    );
  }
}

export default Symptoms;
