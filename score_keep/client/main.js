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

/*
renderPlayers is a function that take a parameter of "playerList", which
is just a name for the argument. renderPlayers is responsible for taking an
array of objects, the players array, and returning an array of JSX. The renderPlayers
function takes the argument "playersList", which is the players list above,
const players = [{_id:'1', name: 'William', score: 47}...}]. To avoid confusion,
"playersList" is used instead of "players" although they represent the same thing.
The players.map is an array method. the .map mehtod takes a callback function as
its argument, "player". This will look at every itme in the array and treat it
as one player.
*/

//const renderPlayers = function(playersList){
// const renderPlayers = (playersList) => { //above line written as ES6 arrow function
// //   //return playersList.map(function(player){
//   return playersList.map((player) => { //above line written as ES6 arrow function
//     return <Player key={player._id} player={player}/>;
//     // return (
//       // <p key={player._id}>
//       //   {player.name} has {player.score} point(s).
//       //   <button onClick={() => {
//       //     Players.remove({_id: player._id});
//       //   }}>X</button>
//       // </p>
//       /*below is the onClick function written in EXPRESSION syntax*/
//       /* Can target the player id without an object after the Players.update().
//           Instead of Players.update({_id: player._id}, {$inc: {score: 1}})
//           can do Players.update(player._id, {$inc: {score: 1}})
//       */
//     //   <p key={player._id}>
//     //     {player.name} has {player.score} point(s).
//     //     <button onClick= {() => Players.update({_id: player._id}, {$inc: {score: 1}})}>+1</button>
//     //     <button onClick= {() => Players.update({_id: player._id}, {$inc: {score: -1}})}>-1</button>
//     //     <button onClick={() => Players.remove({_id: player._id})}>X</button>
//     //   </p>
//     // );
//   });
// };
/* ES6 EXPRESSION syntax instead of the STATEMENT syntax*/
// const renderPlayers = (playersList) => playersList.map((player) => <p key={player._id}>{player.name} has {player.score} point(s)</p>);
//

//const handleSubmit = function (event){


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
