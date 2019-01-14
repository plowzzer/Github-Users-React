import React, { Component } from 'react'
import {Link} from 'react-router';

class UserHeader extends Component {
  render(){
    return(
      <div className="uk-card-header">
        <div className="uk-grid-small uk-flex-middle" data-uk-grid>
          <div className="uk-width-auto">
            <img className="uk-border-circle" width="40" height="40" src={this.props.follower.avatar_url} alt={this.props.follower.login}/>
          </div>
          <div className="uk-width-expand">
            <h4 className="uk-card-title uk-margin-remove-bottom">
              <Link to={'/user/'+this.props.follower.login}>{this.props.follower.login}</Link>
            </h4>
          </div>
        </div>
      </div>
    )
  }
}

class UserFooter extends Component{

  buy(event) {
    event.preventDefault();
    //this.props.follower.login
    this.props.shoppingList(this.props.follower.login)
  }

  render(){
    return(
      <div className="uk-card-footer">
        <button onClick={this.buy.bind(this)} className="uk-button uk-button-text">Buy {this.props.follower.login}</button>
      </div>
    )
  }
}

export default class UserItem extends Component {
  render(){
    return(
      <div>
        <div className="uk-card uk-card-default">
          <UserHeader follower={this.props.follower}/>
          <UserFooter follower={this.props.follower} shoppingList={this.props.shoppingList}/>
        </div>
      </div>
    );
  }
};