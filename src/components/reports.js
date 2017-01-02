import React, { Component } from 'react';
import Record from './record';
import axios from 'axios';
import '../styles/spinner.css';

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
      console.log(response)
      this.setState({
        incidents: response.data,
        loading: false
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  deleteRecord(recordDeleted) {
    console.log("record id is ", recordDeleted);

      // `/api/v1/notifications/${itemId}/delete`

    axios.delete(`https://pure-mesa-82885.herokuapp.com/users/ljoyner/incidents/${recordDeleted._id}`)
   .then(function (response) {
      console.log(response)
   })
   .catch(function (response) {
      console.error(response);
   });
  }
  render() {
    if (this.state.loading) {
      return (<div className="sk-fading-circle">
        <div className="sk-circle1 sk-circle"></div>
        <div className="sk-circle2 sk-circle"></div>
        <div className="sk-circle3 sk-circle"></div>
        <div className="sk-circle4 sk-circle"></div>
        <div className="sk-circle5 sk-circle"></div>
        <div className="sk-circle6 sk-circle"></div>
        <div className="sk-circle7 sk-circle"></div>
        <div className="sk-circle8 sk-circle"></div>
        <div className="sk-circle9 sk-circle"></div>
        <div className="sk-circle10 sk-circle"></div>
        <div className="sk-circle11 sk-circle"></div>
        <div className="sk-circle12 sk-circle"></div>
      </div>)
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
      {this.state.incidents.map((incident, index) =>
        <Record key={index} incident={incident} deleteRecord={this.deleteRecord}/>
      )}
      </div>
    );
  }
}

export default Reports;
