import React from 'react';
import { Session } from 'meteor/session';
import { Tracker } from 'meteor/tracker';

export default class HiddenFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showVisible: true
    };
  }

  componentDidMount() {
    this.tracker = Tracker.autorun(() => {
      this.setState({
        showVisible: Session.get('showVisible')
      })
    });
  }

  componentWillUnmount(){
    this.tracker.stop()
  }

  render () {
    return (
      <div>
        <label className="checkbox">
          <input className="checkbox__box" type="checkbox" checked={!this.state.showVisible} onChange={(event) => {
            console.log(event.target.checked);
            Session.set('showVisible', !event.target.checked);
            // setting the value of showVisible  key to reverse so if the box is checked,
            // the hidden links are shown. If the box is checked, event.target.checked is "true"
            // and we want to set the showVisible to false so hidden links will show.
          }}/>
          Show Hidden Links
        </label>
      </div>
    );//putting the input inside of the <label> tags allows user to click on checkbox or text to toggle.
  }
}
