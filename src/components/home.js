import React, { Component } from 'react';
import {Link} from 'react-router';
import Logo from '../logo.png';
import { connect } from 'react-redux';
import '../styles/App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Nav">
          <Link to="/start">
            <img className="LogoNav" src={Logo} alt="logo"/>
          </Link>
          <Link className="NavItem" to="/reports">
            <p>Reports</p>
          </Link>
        </div>
        <ReactCSSTransitionGroup
          className="Page"
          component="div"
          transitionName="move"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          >
          {React.cloneElement(this.props.children, {...this.props,
          key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    incidents: state.incidents,
    timer: state.timer
  }
);

export default connect(mapStateToProps)(Home);
