import React, { Component } from 'react';
import {Link} from 'react-router'
import '../styles/App.css';

class Login extends Component {

  render() {
    return (
      <div className="LoginBox">
        <div className="LoginForm">
          <div className="LoginText">
            <p>First name</p>
            <input className="LoginInput"/>
          </div>
          <div className="LoginText">
            <p>Last name</p>
            <input className="LoginInput"/>
          </div>
          <div className="LoginText">
            <p>Email</p>
            <input className="LoginInput"/>
          </div>
          <div className="LoginText">
            <p>Password</p>
            <input className="LoginInput"/>
          </div>
          <div className="SegmentLink">
            <Link to="/start">
              <p>Login</p></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
