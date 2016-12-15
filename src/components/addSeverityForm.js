import React, { Component } from 'react';
import '../styles/App.css';

class AddSeverityForm extends Component {

  handleSubmit(e) {
    e.preventDefault();
    this.props.addSeverity(this.input.value);
  }

  render() {
    return (
      <div>
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input placeholder="rating" ref={(rating) => this.input = rating} />
        <button type="submit">Submit Rating</button>
      </form>
      </div>
    );
  }
}

export default AddSeverityForm;
