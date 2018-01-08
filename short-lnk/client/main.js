import 'babel-polyfill';
import {Meteor} from 'meteor/meteor';
import ReactDOM from 'react-dom';
import {Tracker} from 'meteor/tracker';
import { routes, onAuthChange } from '../imports/routes/routes'



Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId(); //takes the truthy or falsey and turns it into a true boolena value.
  // a single ! with flip the value. two !! will return true or false.
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
