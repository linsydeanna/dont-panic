import React, { Component } from 'react';
import moment from 'moment';

class Record extends Component {
  render() {
    console.log(moment().format('LT'))
    const { occurrence } = this.props
    return(
      <div className="ReportItems">
      <p>{occurrence.createDate}</p>
      <p>{occurrence.duration} minutes</p>
      <p>{occurrence.symptoms.join(", ")}</p>
      <p>{occurrence.severity}</p>
      </div>
    )
  }
}

export default Record;
