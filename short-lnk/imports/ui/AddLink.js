import React from 'react';
import  Modal from 'react-modal';
import { Meteor } from 'meteor/meteor';//moved from Links.js to here



export default class AddLink extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      url: '',
      isOpen: false,//this is set so buttons can be used to set the value os isOpen
      error: ''//sets the deafult error message to empty string. This can be set when there are errors below.
    }
  }
  onSubmit(e){ //******* this is moved into the AddLink.js component.
    // const url = this.refs.url.value.trim();//Not needed as now getting input via state of url field with onInputChange
    const url = this.state.url;
    // const { url } = this.state;//same as the line above but in ES6 format.
    e.preventDefault();
    // e is short for event and the Default is a full-page refresh

    Meteor.call('links.insert', url, (err, res) => {//calls the links.insert method in the imports/api/links.js file
      if (!err){//if there are no errors inserting info.
        this.handleModalClose();//calls method below to change isOpen to false, clear URL imput field and error to ''
      } else {
        this.setState({error: err.reason});
      }
    });
  }

  onInputChange(event){//this method is used to set the state of the input field in the render method.
    this.setState({
      url: event.target.value.trim()
    });
  }
  handleModalClose(){//This method replaces setting all of these when closing the modal via cancel btn, AddLink btn, clicking outside of the modal box or successfully adding a link. Also works when presseing the ESC key.
    this.setState({
      isOpen: false,
      url: '',
      error: ''
    });
  }

  render () {
    return (//the <Modal> tags will contain the elemeents for adding a new link.
      /* the onClick event in the Add Link button will set the state of isOpen to true nad the
      Modal will appear.*/
      <div>
        <button className="button" onClick={() => this.setState({isOpen: true})}>+ Add Link</button>
        <Modal
          isOpen={this.state.isOpen}
          contentLabel="AddLink"
          onAfterOpen={() => this.refs.url.focus()}
          onRequestClose={this.handleModalClose.bind(this)}
          className="boxed-view__box"
          overlayClassName="boxed-view boxed-view--modal">
          {/* onAfterOpen is another prop and it allows us to have the input field in focus. Need to use the ref
            prop of the <input> to target it.
            The className and the overlayClassName are added so that the styling can
            be added. The overlayClassName refers to the area around the white box with the AddLink inputs and buttons*/}
          <h3>Add link</h3>
          {this.state.error ? <p>{this.state.error}</p> : undefined}
          <form onSubmit={this.onSubmit.bind(this)} className="boxed-view__form">
            <input
              type="text"
              // ref="url"//not needed since using state and the onChange handler
              placeholder="enter URL"
              ref="url"
              value={this.state.url}// this is set in the constructor so the text in the input would not be editable
              onChange={this.onInputChange.bind(this)}/>
              {/* the onChange allows the text in the input field to be editable. Both "onChange" and "value" are
                necessary when making controlled inputs. The onChange handler refernces a method, onInputChange, defined above render method. The .bind(this) will bind it to the current component. */}
            <button className="button">+ Add Link</button>
            <button type="button" onClick={this.handleModalClose.bind(this)} className="button button-secondary">Cancel</button>
            {/* Placing the Cancel button inside the form will help with styling but because it is now inside the form,
              it will call onSubmit when clicked. Adding the type="button" will remove this onSubmit association.*/}
          </form>

        </Modal>
      </div>
    );
  }
}
