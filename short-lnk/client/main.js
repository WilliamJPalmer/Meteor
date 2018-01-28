import 'babel-polyfill';
import {Meteor} from 'meteor/meteor';
import ReactDOM from 'react-dom';
import {Tracker} from 'meteor/tracker';
import { Session } from 'meteor/session';

import { routes, onAuthChange } from '../imports/routes/routes';
import '../imports/startup/simple-schema-configuration';


Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId(); //takes the truthy or falsey and turns it into a true boolena value.
  // a single ! with flip the value. two !! will return true or false.
  onAuthChange(isAuthenticated);
});

Session.set()


Meteor.startup(() => {
  Session.set('showVisible', true);//this will show all the links that have not been hidden
  ReactDOM.render(routes, document.getElementById('app'));
});
