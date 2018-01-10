import React from 'react';
import { Meteor } from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import { Links } from '../api/links';

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
      const links = Links.find().fetch();
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
      return (
        <p key={link._id}>{link.url}</p>
      )
    })
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
