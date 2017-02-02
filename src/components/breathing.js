import React, { Component } from 'react';
import {Link} from 'react-router';
import '../styles/breathing.css';

class Breathing extends Component {
  render() {
    return (
      <div>
        <h1>Breathing Exercise</h1>
        <div className="Circle"><p className="Exhale">Exhale</p><p className="Inhale">Inhale</p></div>
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
