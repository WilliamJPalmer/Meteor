import React from 'react';
import { Accounts } from 'meteor/accounts-base';//moved from Links.js to here


// export default class PrivateHeader extends React.Component {
//   onLogout(){ //********* this is moved into the PrivateHeader.js component.
//     Accounts.logout();
//   }
//
//   render () {
//     return (
//       <div>
//         <h3>{this.props.title}</h3>
//         <button onClick={this.onLogout.bind(this)}>Logout</button>
//       </div>
//     );
//   }
// }

/* below is the same code above written as a Stateless Functional Component.
don't need "this." because props is the argument in the function.
*/
const PrivateHeader = (props) => {
  return (
    <div className="title-bar">
      <div className="title-bar__content">
        <h1 className="title-bar__title">{props.title }</h1>
        <button onClick={() => Accounts.logout()} className="button button--link-text">Logout</button>
      </div>
    </div>
  );

};

PrivateHeader.propTypes = {
  title: React.PropTypes.string.isRequired
}

export default PrivateHeader;
