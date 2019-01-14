import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import Header from './components/Header'
import UserDetails from './components/user/UserDetails'
import Shop from './components/Shop'

class App extends Component {
  render() {
    return (
      <div id="root">
        <div className="main">
          <Header/>
          <UserDetails/>
          <Shop/>
        </div>
      </div>
    );
  }
}

// App.contextType = {
//   store: React.PropTypes.object.isRequired
// }

export default App;
