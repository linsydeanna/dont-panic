import React, { Component } from 'react';
import {Link} from 'react-router';
import '../styles/App.css';
import { connect } from 'react-redux';

class Home extends Component {

  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, this.props)}
        <div>
          <Link to="/reports">Reports</Link>
          <Link to="/start">Home</Link>
        </div>
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
