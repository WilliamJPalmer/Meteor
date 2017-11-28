import React from 'react';//need to import react.

/*JSX does require uppercase convention when working with components
but uppercase is not enforced by ES6 classes.
export default allows the client/main.js file to use the component
*/
export default class TitleBar extends React.Component{
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired
};

TitleBar.defaultProps = {
  title: "Default Title"
};
