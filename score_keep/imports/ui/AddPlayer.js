import React from 'react';//need to import react.

import {Players} from './../api/players'
/*JSX does require uppercase convention when working with components
but uppercase is not enforced by ES6 classes.
export default allows the client/main.js file to use the component
*/




export default class AddPlayer extends React.Component{
  handleSubmit(event){
    let playerName = event.target.playerName.value;

    event.preventDefault();//this prevents a full page refresh when the form in the HTML is submitted

    if (playerName){// this means if the input field is not empty.
      event.target.playerName.value = '';//resets input field to blank
      Players.insert({
        name: playerName, /*the value in the playerName input field. Only need to reference the name of
        the input field. Do not need to use event.target.playerName.value*/
        score: 0 // default score is zero
        // score: this.props.score // takes the value of the score prop attached to the <AddPlayer/>
      });
    }
  }
  render(){
    return(
      /* the this.handleSubmit.bind(this) makes the onSubmit target the method in the conponent. This
      is helpful when a prop is applied to the custom tag like <AddPlayer score={10}/> in the client/main.js file.
      If the .bind(this) is not added, the this.handleSubmit will reference the browser
      window and not the method. The.bind method keeps the this. binding intact.
      */
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="playerName" placeholder="Player name"/>
          <button>Add Player</button>
        </form>
      </div>
    )
  }

}
