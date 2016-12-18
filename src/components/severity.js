import React, { Component } from 'react';
import {Link} from 'react-router';
import * as actionCreators from '../actions/actionCreators'
import { bindActionCreators } from 'redux';
import AddSeverityForm from '../components/addSeverityForm';
import axios from 'axios';

class Severity extends Component {

  postIncident() {
    console.log("postIncident");
    console.log("severity is ", this.props.incidents.severity);
    console.log("duration is ", this.props.incidents.duration);
    console.log("symptoms is ", this.props.incidents.symptoms);
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

    const { dispatch, incidents } = this.props;
    console.log("this.props.incidents is ", incidents);
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
      <button onClick={() => this.postIncident()}>Post Data</button>
      </div>
    );
  }
}

export default Severity;
