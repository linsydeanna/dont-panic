import React, { Component } from 'react';
import {Link} from 'react-router'
import '../styles/App.css';

class Start extends Component {

  render() {
    return (
      <div>
        <div className="Exercise">
          <Link to="/symptoms">Start</Link>
        </div>
      </div>
    );
  }
}

export default Start;
