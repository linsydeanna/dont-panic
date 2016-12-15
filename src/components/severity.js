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
        Rate the severity of this panic attack.
        <AddSeverityForm addSeverity={addSeverity} />
        <Link to="/end">Finish</Link>
      </div>
    );
  }
}

export default Severity;
