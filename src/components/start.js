import React, { Component } from 'react';
import {Link} from 'react-router'
import * as actionCreators from '../actions/actionCreators'
import { bindActionCreators } from 'redux';
import '../styles/App.css';
import axios from 'axios';
import moment from 'moment';

class Start extends Component {
  constructor() {
    super();
    this.state = {
      incidents: [],
      loading: true
    }
  }

  startTimer() {
    const startTime = Date.now()
    const { dispatch } = this.props;
    const startTimer = bindActionCreators(actionCreators.addStart, dispatch);
    startTimer(startTime);
  }

  componentWillMount() {
    axios.get('https://pure-mesa-82885.herokuapp.com/users/ljoyner/incidents')
    .then((response) => {
      console.log(response)
      this.setState({
        incidents: response.data,
        loading: false
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    if (!this.state.loading) {
      console.log(this.state.incidents[this.state.incidents.length - 1].createDate)
    }
    return (
        <div className="Segment">
          <h1>Your last panic attack was
            {this.state.loading ? '' : ' ' + moment(this.state.incidents[this.state.incidents.length - 1].createDate).format('MMMM Do, YYYY')}</h1>
          <h1>Having a panic attack? Start the exercise.</h1>
          <div className="SegmentLink">
          <Link onClick={() => this.startTimer()} to="/symptoms">
              <p>Start</p>
          </Link>
          </div>

        </div>
    );
  }
}

export default Start;
