import React, { Component } from 'react';
import '../styles/App.css';

class AddSeverityForm extends Component {
  constructor() {
    super();
    this.state = {
      severityRating: 0
    }
  }
  handleClick(rating) {
    this.setState({
      severityRating: rating
    })
    this.props.addSeverity(rating);
  }
  render() {
    const ratingNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
      <div className="Ratings">
      {ratingNumbers.map((number) =>
        <div key={number}>
        {this.state.severityRating === number ?
          <div className="Circle" onClick={() => this.handleClick(number)} style={{ background: "#272635", color: "#B1E5F2" }}>
            <p>{number}</p>
          </div> :
          <div className="Circle" onClick={() => this.handleClick(number)} style={{ background: "#A6A6A8", color: "#272635" }}>
            <p>{number}</p>
          </div>}
          </div>
        )}
      </div>
    );
  }
}

export default AddSeverityForm;
