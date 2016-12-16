import React, { Component } from 'react';
import Record from './record';
import axios from 'axios';

class Reports extends Component {
  constructor() {
    super();
    this.state = {
      incidents: []
    }
  }

  componentDidMount() {
    axios.get('https://pure-mesa-82885.herokuapp.com/users/ljoyner/incidents')
    .then(function (response) {
      this.setState({
        incidents: response.data
      })
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const incidents = this.state.incidents;
    console.log("incidents in render is ", incidents)
    return (
      <div>
        <div className="ReportItems">
          <p>Date</p>
          <p>Duration</p>
          <p>Symptoms</p>
          <p>Severity Rating</p>
        </div>
      {incidents.map((incident, index) =>
        <Record key={index} incident={incident}/>
      )}
      </div>
    );
  }
}

export default Reports;
