import React, { Component } from 'react';
import {Link} from 'react-router'

class Breathing extends Component {
  render() {
    return (
      <div className="Exercise">
        Breathing
      <Link to="/severity">Continue</Link>
      </div>
    );
  }
}

export default Breathing;
