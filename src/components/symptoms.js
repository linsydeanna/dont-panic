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
      <div>
      <h1>Select your symptoms</h1>
      <div>
        <SymptomsList addSymptoms={addSymptoms} />
      </div>
      <div className="SegmentLink">
      <Link className="SegmentLink" to="/breathing">
        <p>Continue</p>
      </Link>
      </div>
      </div>
    );
  }
}

export default Symptoms;
