import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

import { Links } from '../api/links';
import LinksList from './LinksList';

export default class Link extends React.Component {
  onLogout(){
    Accounts.logout();
  }
  onSubmit(e){
    const url = this.refs.url.value.trim();
    e.preventDefault();
    // e is short for event and the Default is a full-page refresh
    if (url){//if the input field, with the ref="url" has text
      //Links.insert({ url, userId: Meteor.userId() });//inserts into the Links collection
      // can't use the above line because the insecure package has been removed. Need to use Meteor.call
      Meteor.call('links.insert', url)//same name as in the links.js and url is from const url above.
      this.refs.url.value = "";
    }
  }
  render() {
    return (
      <div>
        <h3>Your Link Component</h3>
        <button onClick={this.onLogout.bind(this)}>Logout</button>
        <LinksList/>
        <p>Add link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="url" placeholder="enter URL"/>
          <button>Add Link</button>

        </form>

      </div>
      );
  }
}
