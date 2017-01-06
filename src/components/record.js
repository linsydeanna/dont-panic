import React, { Component } from 'react';
import moment from 'moment';

class Record extends Component {

  // <span className="fa fa-times TrashCan" name="fa-times"
  //   onClick={() => this.props.deleteRecord(incident)}>
  // </span>


  render() {
    const { incident } = this.props
    let symptomList
    if (incident.symptoms.length > 1) {
      symptomList = incident.symptoms.join(", ")
    } else if (incident.symptoms.length === 1) {
      symptomList = incident.symptoms
    }
    let min = ' minute'
    if (incident.duration > 1) {
      min = ' minutes'
    }
    return(
      <div className="ReportItems">
        <p>{moment(incident.createDate).format('MMMM Do, YYYY')}</p>
        <p>{moment(incident.createDate).format('h:mma')}</p>
        <p>{incident.duration} {min}</p>
        <p>{symptomList}</p>
        <p>{incident.severity}</p>
      </div>
    )
  }
}

export default Record;
