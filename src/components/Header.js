import React, { Component } from 'react'
import ShopAPI from '../services/shopAPI';
import {connect} from 'react-redux';
import { Link } from 'react-router';

export class Header extends Component{

  componentWillMount(){
    const userList = localStorage.getItem('userList')
    this.user = this.props.getShoppingList(userList)
  }

  render(){
    return(
      <div className="header">
        <nav className="uk-navbar-container uk-container" data-uk-navbar>
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/cart">Cart</Link></li>
            </ul>
          </div>

          <div className="uk-navbar-center">
            <div className="uk-navbar-item uk-logo">Desafio CargoBR</div>
          </div>

          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
              <li>
                <span data-uk-icon="icon: cart"></span>
                <div className="uk-navbar-dropdown">
                  <ul className="uk-nav uk-navbar-dropdown-nav">
                    {
                      this.props.users.map(user => {
                        return(
                          <li key={user}>{user}</li>
                        )
                      })
                    }
                    <li><Link to="/cart" className="">Open cart</Link></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {users : state.header}
};

const mapDispatchToProps = dispatch => {
  return {
    shoppingList : (username) =>{
      dispatch(ShopAPI.shoppingList(username))
    },
    getShoppingList : (userList) =>{
      dispatch(ShopAPI.getShoppingList(userList))
    }
  }
}

const HeaderContainer = connect(mapStateToProps,mapDispatchToProps)(Header);

export default HeaderContainer