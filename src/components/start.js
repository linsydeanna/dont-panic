import React, { Component } from 'react';
import {Link} from 'react-router'
import '../styles/App.css';

class Start extends Component {

  render() {
    return (
        <div className="Segment">
          <h1>Start the exercise</h1>
          <div className="SegmentLink">
          <Link to="/symptoms">

              <p>Start</p>

          </Link>
          </div>
        </div>
    );
  }
}

export default Start;
