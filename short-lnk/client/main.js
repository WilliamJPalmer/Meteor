import 'babel-polyfill';
import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {Tracker} from 'meteor/tracker';

import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';
import NotFound from '../imports/ui/NotFound';
import Login from '../imports/ui/Login';

const unauthenticatedPages = ['/', '/signup'];// pages that don't need to be logged in to see
const authenticatedPages = ['/links'];//avaialble only is logged in
const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Login}/>
    <Route path='/signup' component={Signup}/>
    <Route path='/links' component={Link}/>
    <Route path='*' component={NotFound}/>
  </Router>
);

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId(); //takes the truthy or falsey and turns it into a true boolena value.
  // a single ! with flip the value. two !! will return true or false.
  const pathname = browserHistory.getCurrentLocation().pathname;//gets the current page.
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);//checks to see if the current page is in the unauthenticatedPages array
  const isAuthenticatedPage = authenticatedPages.includes(pathname);//checks to see if the current page is in the authenticatedPages array

  if (isAuthenticated && isUnauthenticatedPage){
    browserHistory.push('/links')// if user is logged in and navigates to an unauthenticate page, goes to links page
  }else if (!isAuthenticated && isAuthenticatedPage){
    browserHistory.push('/')// if user is NOT logged in and navigates to an authenticate page, goes to login page
  };
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
