import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
// above allows for the creation on users. This is an atmosphere extension so
//needs to be imported from meteor/accounts-base.

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  onSubmit(event) {
    event.preventDefault();//prevents a full page refresh
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    Accounts.createUser({email,password}, (err) => {
      //console.log('signUP callback', err);
      if (err) {
        this.setState({error: err.reason});
      } else {
        this.setState({error: ''});
      }
    });
  }

  render() {
    return (
        <div>
          <h3>Sign Up for Short Lnk</h3>

          {this.state.error ? <p>{this.state.error}</p> : undefined}
          {/* the above line looks to see if there is an error, if error is true,
            the message from onSubmit will be printed. If error is false, undefined
            will be returned and nothing will be rendered to the screen */}
          <form onSubmit={this.onSubmit.bind(this)}>
            <input type='email' ref="email" name='email' placeholder='Email'/>
            <input type='password' ref="password" name='password' placeholder='Password'/>
            <button>Create Account</button>
          </form>

          <Link to='/'>Already have an account?</Link>

        </div>
    );
  }
}
