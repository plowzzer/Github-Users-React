import React, { Component } from 'react';

import Header from './components/Header'
import UserDetails from './components/user/UserDetails'
import Shop from './components/Shop'

class App extends Component {
  render() {
    return (
      <div id="root">
        <div className="main">
          <Header/>
          <UserDetails newUser={this.props.params.login}/>
          <Shop newUser={this.props.params.login}/>
        </div>
      </div>
    );
  }
}


export default App;
