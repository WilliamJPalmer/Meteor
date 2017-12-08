import React from 'react';
import { Link } from 'react-router';

export default class Login extends React.Component {
  render() {
    return (
        <div>
          <h3>Login to Short Lnk</h3>

          <Link to='/signup'>Already have an account?</Link>

        </div>
    );
  }
}
