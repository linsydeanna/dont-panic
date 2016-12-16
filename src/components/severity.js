import React, { Component } from 'react';
import {Link} from 'react-router';
import * as actionCreators from '../actions/actionCreators'
import { bindActionCreators } from 'redux';
import AddSeverityForm from '../components/addSeverityForm';

class Severity extends Component {

  render() {

    const { dispatch } = this.props;
    const addSeverity = bindActionCreators(actionCreators.addSeverity, dispatch);

    return (
      <div className="Exercise">
        <h1>Rate the severity of this panic attack</h1>
        <AddSeverityForm addSeverity={addSeverity} />
        <div className="SegmentLink">
        <Link to="/end">
          <p>Finish</p>
        </Link>
      </div>
      </div>
    );
  }
}

export default Severity;
