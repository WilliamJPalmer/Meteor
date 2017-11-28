import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
  class Person {

  }

  // let me = new Person();
  // console.log(me);

// below is an anonymous function is ES5 syntax
  // let square = function (x){
  //   return x * x;
  // };
  // console.log(square(5));

//this is the above function written with ES6 Arrow function.
/*------ARROW FUNCTIONS HAVE TO BE WRITTEN WITH ANONYMOUS FUNCTIONS------*/
/*------CANNOT BE WRITTEN FOLLOWING THE NAMED FUNCTION SYNTAX------*/
  // let square = (x) => {
  //   return x * x;
  // };
  // console.log(square(6));

// with only one expression in an arrow function, it can be written on one line as:
  // let square = (x) => x * x;
  // console.log(square(7));

  // let numbers = [9,99,4,56];
  /* this is the statement syntax where each line is written and braces are used */
  // let newNumbers = numbers.map((number) => {
  //   return number += 1;
  // });
  /* this is the expression syntax. The braces are gone and everything is on one line */
  // let newNumbers = numbers.map((number) => number += 1);
  // console.log(newNumbers);
});
