import React, { Component } from 'react';

import ShopAPI from '../services/shopAPI';
import {connect} from 'react-redux';

import Header from './Header'
import CartDetails from './cart/CartDetails'

export class Cart extends Component {

  componentDidMount(){
    // console.log(this)
    if(localStorage.getItem('userList')){
      const userList = JSON.parse(localStorage.getItem('userList'))
      this.props.getUsersDetails(userList)
    }
  }

  render() {
    return (
      <div id="root">
        <div className="main">
          <Header/>
          <CartDetails users={this.props.users} getUserList={this.props.getUserList} removeUserFromList={this.props.removeUserFromList}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {users : state.cart, usersHeader : state.header}
};

const mapDispatchToProps = dispatch => {
  return {
    getUsersDetails : (userList) => {
      dispatch(ShopAPI.getUserDetails(userList))
    },
    removeUserFromList : (user) => {
      dispatch(ShopAPI.removeUserFromList(user))
    }
  }
}

const CartContainer = connect(mapStateToProps,mapDispatchToProps)(Cart);

export default CartContainer