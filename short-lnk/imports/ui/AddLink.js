import React from 'react';
import { Meteor } from 'meteor/meteor';//moved from Links.js to here


export default class AddLink extends React.Component {
  onSubmit(e){ //******* this is moved into the AddLink.js component.
    const url = this.refs.url.value.trim();
    e.preventDefault();
    // e is short for event and the Default is a full-page refresh
    if (url){//if the input field, with the ref="url" has text
      //Links.insert({ url, userId: Meteor.userId() });//inserts into the Links collection
      // can't use the above line because the insecure package has been removed. Need to use Meteor.call
      Meteor.call('links.insert', url)//same name as in the links.js and url is from const url above.
      this.refs.url.value = "";
      // all of the onSubmit and the JSX below were on the Links.js before AddLinks.js component was created.
    }
  }

  render () {
    return (
      <div>
        <p>Add link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="url" placeholder="enter URL"/>
          <button>Add Link</button>
        </form>
      </div>
    );
  }
}
