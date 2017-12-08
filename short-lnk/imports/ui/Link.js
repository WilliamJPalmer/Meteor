import React from 'react';
import { browserHistory } from 'react-router';

export default class Link extends React.Component {
  onLogout(){
    browserHistory.push('/');
  }
  render() {
    return (
      <div>
        <h3>Your Link Component</h3>
        <button onClick={this.onLogout.bind(this)}>Logout</button>

      </div>
      );
  }
}
