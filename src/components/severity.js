import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import * as actionCreators from '../actions/actionCreators';
import { bindActionCreators } from 'redux';
import AddSeverityForm from '../components/addSeverityForm';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class Severity extends Component {
  handleClick() {
    if (this.props.incidents.severity === undefined) {
      Alert.info('Whoops! You forgot to select a rating.', {
          position: 'bottom-left',
          effect: 'slide',
          timeout: 3000
      });
    } else {
      const endTime = Date.now()
      const startTime = this.props.timer.start
      const totalTime = endTime - startTime
      const minutes = Math.ceil(totalTime/60000);
      const addDuration = bindActionCreators(actionCreators.addDuration, this.props.dispatch);
      addDuration(minutes);
      browserHistory.push("/end")
    }
  }
  render() {
    const addSeverity = bindActionCreators(actionCreators.addSeverity, this.props.dispatch);
    return (
      <div className="Exercise">
        <h1>Rate the severity of this panic attack</h1>
        <AddSeverityForm addSeverity={addSeverity} />
        <div className="SegmentLink" onClick={() => this.handleClick()}>
          <p>Continue</p>
      </div>
      <Alert stack={{limit: 1}} />
      </div>
    );
  }
}

export default Severity;
