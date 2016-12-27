import React, { Component } from 'react';
import '../styles/App.css';
// import axios from 'axios';

class AddSeverityForm extends Component {

  handleClick(rating) {
    this.props.addSeverity(rating);
  }

  render() {
    const ratingNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
      <div>
      <div className="Ratings">
      {ratingNumbers.map((number) =>
        <div className="Circle" key={number} onClick={() => this.handleClick(number)}>
          <p>{number}</p>
        </div>
      )}
      </div>
      </div>
    );
  }
}

export default AddSeverityForm;
