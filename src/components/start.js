import React, { Component } from 'react';
import {Link} from 'react-router'
import * as actionCreators from '../actions/actionCreators'
import { bindActionCreators } from 'redux';
import '../styles/App.css';

class Start extends Component {

  startTimer() {
    const startTime = Date.now()
    const { dispatch } = this.props;
    const startTimer = bindActionCreators(actionCreators.addDuration, dispatch);
    startTimer(startTime);
  }

  render() {
    return (
        <div className="Segment">
          <h1>Start the exercise</h1>
          <div className="SegmentLink">
          <Link onClick={() => this.startTimer()} to="/symptoms">

              <p>Start</p>

          </Link>
          </div>

        </div>
    );
  }
}

export default Start;
