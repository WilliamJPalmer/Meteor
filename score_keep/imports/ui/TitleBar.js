import React from 'react';//need to import react.

/*JSX does require uppercase convention when working with components
but uppercase is not enforced by ES6 classes.
export default allows the client/main.js file to use the component
*/
export default class TitleBar extends React.Component{
  renderSubtitle(){
    if (this.props.subtitle){
      return <h3 className="title-bar__subtitle">{this.props.subtitle}</h3>;
    }
  }
  render(){
    return(
      <div className="title-bar">
        <div className="wrapper">
          <h1>{this.props.title}</h1>
          {this.renderSubtitle()}
        </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string
};

TitleBar.defaultProps = {
  title: "Default Title"
};
