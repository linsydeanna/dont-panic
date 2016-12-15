import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './app';
import Login from './components/login';
import Home from './components/home';
import Start from './components/start';
import Symptoms from './components/symptoms';
import Breathing from './components/breathing';
import Severity from './components/severity';
import End from './components/end';
import Reports from './components/reports';

import { Provider } from 'react-redux';
import store from './store';
// import store, { history } from './store';


const routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      <IndexRoute component={Login} />
      <Route path="/home" component={Home}>
        <Route path="/start" component={Start}/>
        <Route path="/symptoms" component={Symptoms}/>
        <Route path="/breathing" component={Breathing}/>
        <Route path="/severity" component={Severity}/>
        <Route path="/end" component={End}/>
        <Route path="/reports" component={Reports}/>
      </Route>
      </Route>
    </Router>
  </Provider>
)

export default routes;
