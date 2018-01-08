import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

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
