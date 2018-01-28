import React from 'react';
import { Meteor } from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import { Session } from 'meteor/session';//allows use of the Meteor Session Package.

import { Links } from '../api/links';
import LinksListItem from './LinksListItem';//component that will be used to render links.

export default class LinksList extends React.Component{
  //the LinksList will be hte component that will be used to display all of the links
  // this component will be used by the imports/ui/Links.js witht the tage <LinksLists/>
  constructor(props){
    super(props);
    this.state = {
      links: []
    };
  }
  componentDidMount(){//this is a Component Lifecycle Method. This gets loaded right after the is shown to the screen.
    console.log("componentDidMount LinksList");
    this.linksTracker = Tracker.autorun(()=> {
      Meteor.subscribe('links publication');//Must be same string as the argument in  Meteor.publish method, imports/api/links.js
      const links = Links.find({
        visible: Session.get('showVisible')// showVisible is defined in the client/main.js under the client/main,.js
      }).fetch();
      this.setState({ links });
    });
    /* The above Tracker.autorun has been cut from the client/main.js. It will still
    call all of the links that have been created.
    */
  }

  componentWillUnmount(){//this only fires right before a component gets removed, like when loggin out
    console.log("componentWillUnmount LinksList");
    this.linksTracker.stop();
  }

  renderLinksListItems(){
    return this.state.links.map((link) => {
      const shortUrl = Meteor.absoluteUrl(link._id);//this will get the main URL, something like
      // http://localhost:3000/ and add the id of the link after the /
      return <LinksListItem key={link._id} shortUrl = {shortUrl} {...link}/>;
      // new LinksListComponent being called with the props of shortUrl and using
        //the spread, {...}, to include all the key/value pairs for the the link object as props

      });
  }
  render (){
    return (
      <div>
        <p>Links List</p>
        <div>
          {this.renderLinksListItems()}
        </div>
      </div>
    );
  }
};
