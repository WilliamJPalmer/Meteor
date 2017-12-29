import 'babel-polyfill';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  // code to run on server at startup

  Accounts.validateNewUser((user) => {
    const email = user.emails[0].address;
    try{
      new SimpleSchema({
        email: {
          type: String,
          regEx: SimpleSchema.RegEx.Email
        }
      }).validate({email:email})//ES6 shorthand lets this be written as .validate({ email })
    } catch(err){
      throw new Meteor.Error(400, err.message)//err.message is the message that was thrown in the generic
      // and that can be attached to the Meteor.Error
    }

    return true;
  });
/*
  try {
    //throw new Error ('new error message');//generic error message
    throw new Meteor.Error (400, 'Must be a valid email');//always takes two arguments
    //first is a code based error that could be a string or actual error code
    //second is the reason for invalid.
  } catch (e){
    console.log(e);
  }*/
  // const employeeSchema = new SimpleSchema ({
  //   name: {
  //     type: String,
  //     min: 1,
  //     max: 200,
  //   },
  //   hourlyWage: {
  //     type: Number,
  //     min: 1,
  //   },
  //   email: {
  //     type: String,
  //     regEx: SimpleSchema.RegEx.Email
  //   }
  // });
  //
  // employeeSchema.validate({
  //   name: 'Marla',
  //   hourlyWage:45,
  //   email: 'me@mac.com'
  // })
});
