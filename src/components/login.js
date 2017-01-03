import React, { Component } from 'react';
import {Link} from 'react-router'
import '../styles/App.css';
import '../styles/login.css';
import Modal from 'react-modal';
import Logo from '../logo.png';

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
      <div className="LoginPage">
        <img className="Logo" src={Logo} alt="logo"/>
        <div className="LoginButtonContainer">
          <div className="SegmentLink" onClick={() => this.openModal()}>
            <p>Get started</p>
          </div>
          <div className="SegmentLink" onClick={() => this.openModalTwo()}>
            <p>Log in</p>
          </div>
        </div>
        <Modal isOpen={this.state.modalIsOpen} contentLabel="modal"
          className="LoginBox">
          <div onClick={() => this.closeModal()}>X</div>
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
        </Modal>
      </div>
    );
  }
}

export default Login;
