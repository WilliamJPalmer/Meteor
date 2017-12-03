import {Mongo} from 'meteor/mongo';
import numeral from 'numeral';

export const Players = new Mongo.Collection('players');

export const calculatePlayerPositions = (players) => {//players is the array that is returned and sorted by score in the client/main.js
  let rank = 1; //first item in players array will always be first or 1

  return players.map((player, index) => {//players.map allows modification of the players array with a function
      if (index !== 0 && players[index - 1].score > player.score){
        rank ++;
      }
      return {
        ...player,// Object Spread Operator
        rank, //Object Property Shorthand
        position: numeral(rank).format('0o') //numeraljs.com. 
      }
  });
};
