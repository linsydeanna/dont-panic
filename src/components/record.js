import React, { Component } from 'react';
import moment from 'moment';



    // .join(", ")

class Record extends Component {
  render() {
    const { incident } = this.props
    return(
      <div className="ReportItems">
      <p>{moment(incident.createDate).format('MMMM Do YYYY')}</p>
      <p>{moment(incident.createDate).format('h:mma')}</p>
      <p>{incident.duration} minutes</p>
      <p>{incident.symptoms}</p>
      <p>{incident.severity}</p>
      </div>
    )
  }
}

export default Record;
