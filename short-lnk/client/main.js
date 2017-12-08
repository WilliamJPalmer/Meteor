import 'babel-polyfill';
import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';
import NotFound from '../imports/ui/NotFound';
import Login from '../imports/ui/Login';

window.browserHistory = browserHistory;//this gives access to the browserHistory library
//in the console too for Chrome/Safari, can write things like browserHistory.push('/signup')
// and go to that page.

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Login}/>
    <Route path='/signup' component={Signup}/>
    <Route path='/links' component={Link}/>
    <Route path='*' component={NotFound}/>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
