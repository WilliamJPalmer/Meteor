import React from 'react';
import { Link } from 'react-router';

// export default class NotFound extends React.Component {
//   render() {
//     return <p>Page not found component</p>;
//   }
// }
//     SFC version 1
// const NotFound = () => {
//   return (
//     <p>Page not found component</p>
//   );
// }
//
// export default NotFound;

//   SFC version 2
 export default () => {
   return (
     <div className="boxed-view">
       <div className="boxed-view__box">
         <h1> Page not Found</h1>
         <p>Can't find that page</p>
         <Link to="/" className="button button--link"> Back Home </Link>
         {/* the className for the Link needs to reference the button and the button--link
           styles, that is why both are listed separated by a space.*/}
       </div>
     </div>
   )
 }
