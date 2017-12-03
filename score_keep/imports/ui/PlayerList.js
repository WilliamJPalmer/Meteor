import React from 'react';
import Player from './Player';
import FlipMove from 'react-flip-move'
/*can remove the import Player from the client/main.js because
it is imported here and client/main.js imports PlayerList
Since Player.js and PlayerList.js are in the same folder, the
location path does not include ../imports/ui/
*/

export default class PlayerList extends React.Component {
  renderPlayers(){
    if (this.props.players.length === 0) {
      return (
        <div className='item'>
          <p className="item__message">Add first player to start</p>
        </div>
      )
    } else {
      return this.props.players.map((player) => {
        return <Player key={player._id} player={player}/>;
      });
    }
  }
  render(){
    return(
      <div>
        <FlipMove easing="cubic-bezier(0, -0.2, 0.5, 1.5)" maintainContainerHeight={true}>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    );
  }
};

PlayerList.propTypes = {
  players: React.PropTypes.array.isRequired
}
