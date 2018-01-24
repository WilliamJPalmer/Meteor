import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Mongo } from 'meteor/mongo';
import shortid from 'shortid';

export const Links = new Mongo.Collection('links');

if (Meteor.isServer){//the Meteor.publish can only be run on the server, so
  //only if Meteor.isServer is true will Meteor.publish run.
  // Meteor.publish takes two arguments. First is a string and second is a function.
  Meteor.publish('links publication', function () {// cannot write this as ES6 function,
    // () => {}, because need access to the this binding which is not available in ES6
    // to get the current user that is logged in.
    return Links.find({userId: this.userId});
    // this will return only the links created by the currently logged in user.
  });
}

/*Meteor methods, in terms of Methods, Publications and Subscriptions, need to be on the
server and the client side. This allows for the secure updating, creation and removal of
documents in the publication/collection.
*/

Meteor.methods({
  //the links.insert has to be in quotes because the . is not allowed in a object's property name
  'links.insert'(url){//Method name. Has to be referenced exactly as here on server and client side
    if (!this.userId){// if statement makes sure that the user is logged in.
      throw new Meteor.Error('not authorized');
    }


    new SimpleSchema({
      url: {
        type: String,
        label: 'Your link',//the label is used to reaplace the property name, url, with something more readable.
        regEx: SimpleSchema.RegEx.Url
      }
    }).validate({url});//ES6 shorthand lets this be written as .validate({ url })


    Links.insert({
      _id: shortid.generate(),//this will create a shorter id instead of the the long Meteor id that is automatically generate.
      //This can be used due to the import shortid at the top and the npm install shortid run in the terminal.
      url,//this is the argument that is in the 'links.insert' method.
      userId: this.userId
    })
  }

});
