import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
  class Person {
    constructor(name = "Anonymous", age = 0){
      this.name = name;
      this.age = age;
    }
    getGreeting() {
      //return  'Hi! My name is ' + this.name + '.'//concatenated string with dynamic name
      return `Hi! my name is ${this.name}` //this is a template string. Requires backticks
      //instead of single/double quotes. Backtick key is to left of 1
    }
    getPersonDescription(){
      return `${this.name} is ${this.age} year(s) old.`
    }
  }
  class Employee extends Person { //extends Person makes Employee a subclass of Person
    constructor(name, age, title){
      super(name,age);// "super" references the original class of Person
      this.title = title;
    }
    getGreeting(){//this overwrites the orginal getGreetings method
      if (this.title){
        return `Hi, I am ${this.name}. I am a ${this.title}`
      } else {
        return super.getGreeting();//references the original getGreetings method in the Person class
      }
    }
    hasJob(){
      return !!this.title;
      /* the !! returns either true or false. By default, this.title sets a flag to True.
      The first ! sets that statement to false.
      The second sets it back to True.
      */
    }
  }
  class Programmer extends Person {
    constructor(name, age, preferredLanguage = 'Assenbly'){
      super(name, age);
      this.preferredLanguage = preferredLanguage;
    }
    getGreeting(){
      if (this.preferredLanguage){
        return `Hi, I am ${this.name}. I am a ${this.preferredLanguage} developer`
      } else {
        return super.getGreeting();
      }
    }
  }

  // let me = new Employee('William', 25, 'web developer');//creates an instance of the subclass
  // console.log(me.getGreeting());
  // let emp = new Employee('Marla', 32);
  // console.log(emp.getGreeting());
  let dev = new Programmer()
  console.log(dev.getGreeting());

});
