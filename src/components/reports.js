import React, { Component } from 'react';
import Record from './record';
import data from '../data';

class Reports extends Component {
  render() {
    return (
      <div className="Exercise">
        <div className="ReportItems">
          <p>Date</p>
          <p>Duration</p>
          <p>Symptoms</p>
          <p>Severity Rating</p>
        </div>
      {data.map((occurrence, index) =>
        <Record key={index} occurrence={occurrence}/>
      )}
      </div>
    );
  }
}

export default Reports;
