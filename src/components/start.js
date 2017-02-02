import React, { Component } from 'react';
import {Link} from 'react-router'
import * as actionCreators from '../actions/actionCreators'
import { bindActionCreators } from 'redux';
import '../styles/App.css';

class Start extends Component {
  constructor() {
    super();
    this.state = {
      incidents: []
    }
  }

  handleClick() {
    const startTime = Date.now()
    const startTimer = actionCreators.addStart;
    this.props.dispatch(startTimer(startTime));
  }

  render() {
    return (
        <div className="Segment">
          <h1>Having a panic attack? Start the exercise.</h1>
          <div className="SegmentLink">
          <Link onClick={() => this.handleClick()} to="/symptoms">
              <p>Start</p>
          </Link>
          </div>

        </div>
    );
  }
}

export default Start;
