import React from 'react';
import Player from './Player'
/*can remove the import Player from the client/main.js because
it is imported here and client/main.js imports PlayerList
Since Player.js and PlayerList.js are in the same folder, the
location path does not include ../imports/ui/
*/

export default class PlayerList extends React.Component {
  renderPlayers(){
    if (this.props.players.length === 0) {
      return <p>Add first player to start</p>;
    } else {
      return this.props.players.map((player) => {
        return <Player key={player._id} player={player}/>;
      });
    }
  }
  render(){
    return(
      <div>
        {this.renderPlayers()}
      </div>
    );
  }
};

PlayerList.propTypes = {
  players: React.PropTypes.array.isRequired
}
