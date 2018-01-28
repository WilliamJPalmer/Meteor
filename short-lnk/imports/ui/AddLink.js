import React from 'react';
import { Meteor } from 'meteor/meteor';//moved from Links.js to here


export default class AddLink extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      url: ''
    }
  }
  onSubmit(e){ //******* this is moved into the AddLink.js component.
    // const url = this.refs.url.value.trim();//Not needed as now getting input via state of url field with onInputChange
    const url = this.state.url;
    // const { url } = this.state;//same as the line above but in ES6 format.
    e.preventDefault();
    // e is short for event and the Default is a full-page refresh
    if (url){//if the input field, with the ref="url" has text
      //Links.insert({ url, userId: Meteor.userId() });//inserts into the Links collection
      // can't use the above line because the insecure package has been removed. Need to use Meteor.call
      Meteor.call('links.insert', url, (err, res) => {//calls the links.insert method in the imports/api/links.js file
        if (!err){//if there are no errors inserting info.
          this.setState({ url: ''});//sets the state, in this component, with the key "url" to empty string
        }
      });//same name as in the links.js and url is from const url above.
      // this.refs.url.value = "";//not needed if clearing input field with the set state in the if statement above
      // all of the onSubmit and the JSX below were on the Links.js before AddLinks.js component was created.
    }
  }

  onInputChange(event){//this method is used to set the state of the input field in the render method.
    this.setState({
      url: event.target.value.trim()
    });
  }

  render () {
    return (
      <div>
        <p>Add link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            type="text"
            // ref="url"//not needed since using state and the onChange handler
            placeholder="enter URL"
            value={this.state.url}// this is set in the constructor so the text in the input would not be editable
            onChange={this.onInputChange.bind(this)}/>
            {/* the onChange allows the text in the input field to be editable. Both "onChange" and "value" are
              necessary when making controlled inputs. The onChange handler refernces a method, onInputChange, defined above render method. The .bind(this) will bind it to the current component. */}
          <button>Add Link</button>
        </form>
      </div>
    );
  }
}
