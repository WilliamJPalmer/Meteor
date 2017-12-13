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
const onEnterPublicPage = () =>{
  if (Meteor.userId()){
    //browserHistory.push('/links');
    /* .push adds the pathname to the browserHistory. This means that if the browser's
    back button is clicked, the page will go to the page that pushed to the /links page.
    Using .replace rather than .push will overwrite the current page name with the
    redirected page name.
    the .push path from page to page(if user is logged in) and using browser back button
    blankpage -> google.com -> localhost:3000 -.push-> localhost:3000/links <-back- localhost:3000 -.push-> localhost:3000/links

    the .replace path from page to page(if user is logged in) and using browser back button
    bankpage -> google.com -> localhost:3000 -.replace-> localhost:3000/links <-back- google.com*/
    browserHistory.replace('/links');//.replace instead of .push
  }
};
const onEnterPrivatePage = () => {
  if (!Meteor.userId()){
    //console.log("onEnterPrivatePage method");
    browserHistory.replace('/');//.replace instead of .push
    //console.log(browserHistory.getCurrentLocation().pathname);
  }
};
const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Login} onEnter={onEnterPublicPage}/>
    <Route path='/signup' component={Signup} onEnter={onEnterPublicPage}/>
    <Route path='/links' component={Link} onEnter={onEnterPrivatePage}/>
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
    browserHistory.replace('/links')// if user is logged in and navigates to an unauthenticate page, goes to links page
    //.replace instead of .push
  }else if (!isAuthenticated && isAuthenticatedPage){
    browserHistory.replace('/')// if user is NOT logged in and navigates to an authenticate page, goes to login page
    //.replace instead of .push
  };
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
