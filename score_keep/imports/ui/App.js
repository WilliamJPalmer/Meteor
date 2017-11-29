import React from 'react';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';


export default class App extends React.Component {
  render(){
    return(
      <div>
        <TitleBar title={this.props.title}/>
        <PlayerList players={this.props.players}/>
        <AddPlayer/>
      </div>
    );
  }
};

App.propTypes = {
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired
}
