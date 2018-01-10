/*
this file, and its folder startup, are used to define custom error messages that
will allow the removal of the try and catch methods that are used for error messages.
These were coded in the imports/api/links.js and imports/api/users.js to validate
things like the email and the submitted urls for the links.
resources for this can be found by googling 'node simple schema' and clicking on the aldeed github
link. Scroll down to the Validating Data heading and choose subheading, Customize the Error that is Thrown
*/

import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

// SimpleSchema.defineValidationErrorTransform(error => {
//   const customError = new MyCustomErrorType(error.message);
//   customError.errorList = error.details;
//   return customError;
// });

SimpleSchema.defineValidationErrorTransform((e) => {//e is for error
  return new Meteor.Error(400, e.message)
})
