import React, { Component } from 'react';
import Record from './record';
import axios from 'axios';

class Reports extends Component {
  constructor() {
    super();
    this.state = {
      incidents: [],
      loading: true
    }
  }

  componentWillMount() {
    axios.get('https://pure-mesa-82885.herokuapp.com/users/ljoyner/incidents')
    .then((response) => {
      this.setState({
        incidents: response.data,
        loading: false
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { incidents, loading } = this.state;

    if (loading) {
      return <div>Loading Reports</div>;
    }

    return (
      <div>
        <div className="ReportHeaders">
          <p>Date</p>
          <p>Time</p>
          <p>Duration</p>
          <p>Symptoms</p>
          <p>Severity</p>
        </div>
      {incidents.map((incident, index) =>
        <Record key={index} incident={incident}/>
      )}
      </div>
    );
  }
}

export default Reports;
