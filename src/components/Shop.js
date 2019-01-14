import React, { Component } from 'react'
import ShopAPI from '../services/shopAPI';
import {connect} from 'react-redux';
import UserItem from './user/UserItem';

export class Shop extends Component {

  componentDidMount(){
    this.props.listFollowers('plowzzer')
  }

  render() {
    return(
      <div className="uk-container">
        <h1 className="uk-text-center">Plowzzer Followers</h1>
        <div className="shop uk-child-width-1-2 uk-child-width-1-3@m uk-margin" data-uk-grid>
          {
            this.props.followers.map(follower => {
              return(
                <UserItem key={follower.id} follower={follower} shoppingList={this.props.shoppingList}/>
              )
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {followers : state.shop}
};

const mapDispatchToProps = dispatch => {
  return {
    listFollowers : (username) =>{
      dispatch(ShopAPI.listFollowers(username))
    },
    shoppingList : (users) =>{
      dispatch(ShopAPI.shoppingList(users))
    }

  }
}

const ShopContainer = connect(mapStateToProps,mapDispatchToProps)(Shop);

export default ShopContainer