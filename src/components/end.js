import React, { Component } from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';

class End extends Component {
  constructor() {
    super();
    this.state = {
      saving: false
    }
  }

  postIncident() {
    this.setState({
      saving: true
    })
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
  this.setState({
    saving: false
  })
  browserHistory.push("/start")
  }

  render() {
    let saving;
    if (this.state.saving) {
      saving = <div>Saving</div>;
    }
    return (
      <div>
      <h1 className="Text">You've finished the exercise. Would you like to save a report of this panic attack?</h1>
      <div className="SegmentLink" onClick={() => this.postIncident()}>
        <p>Save</p>
      </div>
      {saving}
      </div>
    );
  }
}

export default End;
