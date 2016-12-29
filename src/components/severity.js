import React, { Component } from 'react';
import {Link} from 'react-router';
import * as actionCreators from '../actions/actionCreators'
import { bindActionCreators } from 'redux';
import AddSeverityForm from '../components/addSeverityForm';

class Severity extends Component {

  stopTimer() {
    const endTime = Date.now()
    const startTime = this.props.timer.start
    const totalTime = endTime - startTime
    const minutes = Math.ceil(totalTime/60000);
    const { dispatch } = this.props;
    const addDuration = bindActionCreators(actionCreators.addDuration, dispatch);
    addDuration(minutes);
  }

  render() {

    const { dispatch } = this.props;
    const addSeverity = bindActionCreators(actionCreators.addSeverity, dispatch);

    return (
      <div className="Exercise">
        <h1>Rate the severity of this panic attack</h1>
        <AddSeverityForm addSeverity={addSeverity} />
        <div className="SegmentLink">
        <Link onClick={() => this.stopTimer()} to="/end">
          <p>Finish</p>
        </Link>
      </div>
      </div>
    );
  }
}

export default Severity;
