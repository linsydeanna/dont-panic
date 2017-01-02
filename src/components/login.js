import React, { Component } from 'react';
import {Link} from 'react-router'
import '../styles/App.css';
import '../styles/login.css';
import Modal from 'react-modal';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    }
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    })
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.openModal()}>Log in</button>
      <Modal isOpen={this.state.modalIsOpen} contentLabel="modal">
      <div className="LoginBox">
        <div className="LoginForm">
          <div className="LoginText">
            <p>FIRST NAME</p>
            <input className="LoginInput"/>
          </div>
          <div className="LoginText">
            <p>LAST NAME</p>
            <input className="LoginInput"/>
          </div>
          <div className="LoginText">
            <p>USERNAME</p>
            <input className="LoginInput"/>
          </div>
          <div className="LoginText">
            <p>EMAIL ADDRESS</p>
            <input className="LoginInput"/>
          </div>
          <div className="LoginText">
            <p>PASSWORD</p>
            <input className="LoginInput"/>
          </div>
          <div className="LoginText">
            <p>CONFIRM PASSWORD</p>
            <input className="LoginInput"/>
          </div>
        </div>
        <div className="SegmentLink">
          <Link to="/start">
            <p>Log in</p>
          </Link>
        </div>
      </div>
      </Modal>
      </div>
    );
  }
}

export default Login;
