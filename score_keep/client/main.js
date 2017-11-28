/*
the NAMED EXPORT will always use the name assigned in the export file
and will be placed in braces, {}. Multiple Named Exports can be
imported in the same line, each one serparated by a comma followed
by a space.

Default Values are imported before the NAMED Exports. Since they were not
named in the exporting file, the name is assigned in the import statement.
Default Values are listed before the Named Exports which are inside the
braces. A comma followed by a space will serparate the Default and Named
*/

/*
****************************************************
any components in the imports/ui folder will need to be imported below.
****************************************************
*/
import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
// import Player from './../imports/ui/Player';
//above line is imported via PlayerList so no need to import here.
import PlayerList from './../imports/ui/PlayerList';


//Meteor.startup(function(){
Meteor.startup(() => { //above line written as ES6 arrow function
  //Tracker.autorun(function(){
  Tracker.autorun(() => { //above line written as ES6 arrow function
    console.log('Players List from clients main.js', Players.find().fetch());
    let players = Players.find().fetch();
    let title = "Score Keeper";
    let subtitle = "Created by Me"
    let name = "William";
    let jsx = (
      <div>
        <TitleBar title={title} subtitle={subtitle}/>
        <PlayerList players={players}/>
        <AddPlayer/>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById("app"));
  });
});