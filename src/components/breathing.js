import React, { Component } from 'react';
import {Link} from 'react-router'

class Breathing extends Component {
  render() {
    return (
      <div>
        <h1>Breathing Exercise</h1>
      <div className="SegmentLink">
      <Link to="/severity">
        <p>Continue</p>
      </Link>
    </div>
      </div>
    );
  }
}

export default Breathing;
