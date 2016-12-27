import React, { Component } from 'react';
import {Link} from 'react-router';
import * as actionCreators from '../actions/actionCreators'
import { bindActionCreators } from 'redux';
import AddSeverityForm from '../components/addSeverityForm';
import axios from 'axios';

class Severity extends Component {

  stopTimer() {
    const endTime = Date.now()
    const startTime = this.props.timer.start
    const totalTime = endTime - startTime
    const minutes = Math.floor(totalTime/60000)
  }

  postIncident() {
    axios.post('https://pure-mesa-82885.herokuapp.com/users/ljoyner/incidents', {
      'severity': this.props.incidents.severity,
      'duration': this.props.incidents.duration,
      'symptoms': this.props.incidents.symptoms,
      'username': 'ljoyner'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

    axios.get('https://pure-mesa-82885.herokuapp.com/users/ljoyner/incidents')
    .then((response) => {
  console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {

    const { dispatch } = this.props;
    const addSeverity = bindActionCreators(actionCreators.addSeverity, dispatch);

    return (
      <div className="Exercise">
        <h1>Rate the severity of this panic attack</h1>
        <AddSeverityForm addSeverity={addSeverity} />
        <button onClick={() => this.stopTimer()}>Stop Timer</button>
        <div className="SegmentLink">
        <Link to="/end">
          <p>Finish</p>
        </Link>
      </div>
      <button onClick={() => this.postIncident()}>Post Data</button>
      </div>
    );
  }
}

export default Severity;
