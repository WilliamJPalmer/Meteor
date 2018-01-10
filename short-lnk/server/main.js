import 'babel-polyfill';
import { Meteor } from 'meteor/meteor';
import '../imports/api/links';
import '../imports/startup/simple-schema-configuration';

import '../imports/api/users';
/*Calls the imports/api/user.js file and runs it. There are no exports returned
so no need for the from portion*/


Meteor.startup(() => {
  // code to run on server at startup
  /* to call the Methods for Metoer.methods, use Meteor.call. This takes two arguments.
  First is the name of the method defined in the Meteor.methods arguments
  Second is a callback that is a function. This function takes two arguments, the error, err,
  and the result, res. If there is an error, err will be populated. If no error, res will be populated.
  */
  // Meteor.call('addNumbers', 67, 7, (err, res) => {
  //   console.log('Add Numbers', 'ERR = '+err, 'RES = '+res);
  // })
});
