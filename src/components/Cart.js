import React, { Component } from 'react';

import Header from './Header'

class Cart extends Component {
  render() {
    return (
      <div id="root">
        <div className="main">
          <Header/>
        </div>
      </div>
    );
  }
}

// App.contextType = {
//   store: React.PropTypes.object.isRequired
// }

export default Cart;
