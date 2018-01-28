import React from 'react';

import { Links } from '../api/links';
import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import HiddenFilter from './HiddenFilter';

/*Stateless Functional Component below. Don't have to define the class or the render.
the function handles the render on its own. SFC's are good for Presentational Components that
only display information and do not handle queries, logic or db calls*/
export default () => {
  return (
    <div>
      <PrivateHeader title="Your Links"/>
      <HiddenFilter/>
      <LinksList/>
      <AddLink/>
    </div>
  )
}
// export default class Link extends React.Component {
//   ***** This is ES6 class component.

//   render() {
//     return ( //the H3 and the button moved into the PrivateHeader.js component.
//       <div>
//         <PrivateHeader title="Your links are here"/>
//         <LinksList/>
//         <AddLink/>
//       </div>
//     );//The Add Link and the form moved into the AddLink.js component.
//   }
// }
