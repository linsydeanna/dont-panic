import React, { Component } from 'react';
import axios from 'axios';

class End extends Component {

  postIncident() {
    console.log("this.props.incidents.duration is ", this.props.incidents.duration);
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
  }


  render() {
    return (
      <div>
      <p>You've finished the exercise. Would you like to save a report of this panic attack?</p>
      <div onClick={() => this.postIncident()}>
        <p>Save Report</p>
      </div>
      </div>
    );
  }
}

export default End;
