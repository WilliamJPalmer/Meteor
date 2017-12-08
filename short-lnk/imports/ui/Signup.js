import React from 'react';
import { Link } from 'react-router';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  onSubmit(event) {
    event.preventDefault();
    this.setState({
      error: 'Something went wrong'
    });
  }

  render() {
    return (
        <div>
          <h3>Sign Up for Short Lnk</h3>
          <form onSubmit={this.onSubmit.bind(this)}>
            <input type='email' name='email' placeholder='Email'/>
            <input type='password' name='password' placeholder='Password'/>
            <button>Create Account</button>
          </form>

          <Link to='/'>Already have an account?</Link>

        </div>
    );
  }
}
