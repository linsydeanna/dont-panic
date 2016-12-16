import React, { Component } from 'react';
import moment from 'moment';

class Record extends Component {
  render() {
    console.log(moment().format('LT'))
    const { incident } = this.props
    console.log("incident in record is ", incident);
    return(
      <div className="ReportItems">
      <p>{incident.createDate}</p>
      <p>{incident.duration} minutes</p>
      <p>{incident.symptoms.join(", ")}</p>
      <p>{incident.severity}</p>
      </div>
    )
  }
}

export default Record;
