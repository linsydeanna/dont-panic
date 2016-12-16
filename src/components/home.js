import React, { Component } from 'react';
import {Link} from 'react-router';
import Logo from '../logo.png';
import { connect } from 'react-redux';
import '../styles/App.css';

class Home extends Component {

  render() {
    return (
      <div className="Home">
        <div className="Nav">
          <img className="Logo" src={Logo} alt="logo"/>
          <Link className="NavItem" to="/start">
            <p>Home</p>
          </Link>
          <Link className="NavItem" to="/reports">
            <p>Reports</p>
          </Link>
        </div>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    incidents: state.incidents
  }
);

//subscribes Home to any changes in state
export default connect(mapStateToProps)(Home);
