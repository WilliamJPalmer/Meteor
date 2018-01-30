import React from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';


export default class Login extends React.Component {
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
    Meteor.loginWithPassword({email},password, (err) => {
      //console.log('login callback', err);
      if (err) {
        this.setState({error: err.reason});
        //console.log(err.reason);
      } else {
        this.setState({error: ''});
      }
    });
  }
  render() {
    return (
        <div className="boxed-view">
          <div className="boxed-view__box">
            <h1>Login Short Lnk</h1>

            {this.state.error ? <p>{this.state.error}</p> : undefined}
            {/* the above line looks to see if there is an error, if error is true,
              the message from onSubmit will be printed. If error is false, undefined
              will be returned and nothing will be rendered to the screen */}
            <form className="boxed-view__form" onSubmit={this.onSubmit.bind(this)}>
              <input type='email' ref="email" name='email' placeholder='Email'/>
              <input type='password' ref="password" name='password' placeholder='Password'/>
              <button className="button">Login</button>
            </form>

            <Link to='/signup'>Don't have an account?</Link>
          </div>

        </div>
    );
  }
}
