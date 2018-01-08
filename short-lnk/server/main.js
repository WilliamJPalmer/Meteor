import 'babel-polyfill';
import { Meteor } from 'meteor/meteor';

import '../imports/api/users';
/*Calls the imports/api/user.js file and runs it. There are no exports returned
so no need for the from portion*/


Meteor.startup(() => {
  // code to run on server at startup

});
