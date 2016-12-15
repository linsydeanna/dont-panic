import React, { Component } from 'react';
import {Link} from 'react-router'
import '../styles/App.css';

class Login extends Component {

  render() {
    return (
      <div className="App">
        Login
        <Link to="/start">Login</Link>
      </div>
    );
  }
}

export default Login;
