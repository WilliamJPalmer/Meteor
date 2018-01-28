import {Meteor} from 'meteor/meteor';
import React from 'react';
import Clipboard from 'clipboard';//this allows to copy text in a specified area like a listed url
import moment from 'moment';//handles timestamp formating.

export default class LinksListItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      justCopied: false
    }
  }

  componentDidMount() {
    // Using this.clipboard instead of setting a local vairable like const clipboard
    // lets the same instance be accessed with the componentWillUnmount to empty the cliboard
    this.clipboard = new Clipboard(this.refs.copy);// targets the ref named copy

    this.clipboard.on('success', () => {
      this.setState({justCopied: true});
      setTimeout(() => {
        this.setState({justCopied: false});
      }, 1000)
      //setTimeout(() => this.state({justCopied: false}), 1000);//same as the three lines above this one.
    }).on('error', () => {
      alert('Unable to copy, Manually copy link Bitte!');
    })
  }

  componentWillUnmount() {
    // this will clear out any instances of the clipboard so that they are not wasting resources
    // this will be called when the logout button is pressed and that removes the component
    // from the screen.
    this.clipboard.destroy();
  }
  renderStats(){
    const visitMessage = this.props.visitedCount === 1 ? 'visit' : 'visits';

    let visitedMessage;

    if (this.props.lastVisitedAt != null){
      visitedMessage = `(visited ${ moment(this.props.lastVistedAt).fromNow() } )`;
    }

    return <p>{this.props.visitedCount} {visitMessage} - {visitedMessage}</p>;

  }
  render(){
    return (
      <div>
        <p>{this.props.url}</p>
        <p>{this.props.shortUrl}</p>
        <p>{this.props.visible.toString()}</p>
        {this.renderStats()}
        <button ref="copy" data-clipboard-text={this.props.shortUrl}>{this.state.justCopied ? 'Copied' : 'Copy'}</button>
        {/*ref will allow the targeting of the button in the componentDidMount method to initialize Clipboard
          also need to give the data clipboard text attribute which is specific to the clipboard library, hence data-clipboard-text. the shortUrl in this.props.shortUrl is defined in the LinksList.js file
          in the renderLinksListItems() method.
          the text for the button, either "Copy" or "Copied" is determined by use of a Ternary Operator
          It takes a value, this.state.justCopied for example, and the sees if it is truthy or falsey. The ?
          is what denaotes the comparison. The : separates the truthty, between ? and : and the falsey at the end. The values in quotes are what will be displayed.
          JSX wouldn't display true or false so use toString() for the this.props.visible*/}
          <button onClick={() => {
            Meteor.call('links.setVisibility', this.props._id, !this.props.visible);//links.setVisibility is the method
            // name that will be called. also setting two arguemnts for the method, the argument, this.props._id, and then flip the value of the of the visible value with !this.props.visible
          }}>
            {this.props.visible ? 'hide' : 'unhide'}
          </button>
      </div>
    );
  }
};

LinksListItem.propTypes ={
  _id: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  userId: React.PropTypes.string.isRequired,
  shortUrl: React.PropTypes.string.isRequired,
  visible: React.PropTypes.bool.isRequired,
  visitedCount: React.PropTypes.number.isRequired,
  lastVisitedAt: React.PropTypes.number
}
