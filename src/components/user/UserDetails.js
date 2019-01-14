import React, { Component } from 'react'
import ShopAPI from '../../services/shopAPI'
import {connect} from 'react-redux'

export class UserDetails extends Component {

  componentDidMount(){
    if(this.props.newUser){
      this.props.getUser(this.props.newUser)
    } else {
      this.props.getUser('plowzzer')
    }
  }

  componentWillReceiveProps(){
    if(this.props.newUser){
      this.props.getUser(this.props.newUser)
    } else {
      this.props.getUser('plowzzer')
    }
  }

  render(){
    return(
      <div className="uk-container uk-margin-large">
        <div className="uk-grid-small uk-flex-middle" data-uk-grid>
          <div className="uk-width-auto">
            <img className="uk-border-circle" width="120" height="120" src={this.props.user.avatar_url} alt={this.props.user.name + " profile picture"}/>
          </div>
          <div className="uk-width-expand">
            <h3 className="uk-card-title uk-margin-remove-bottom">{this.props.user.name}</h3>
            <p className="uk-text-meta uk-margin-remove">{this.props.user.login}</p> 
            <div className="uk-flex" data-uk-grid>
              <p>Followers: {this.props.user.followers}</p>
              <p>Following: {this.props.user.following}</p>
              <p>Public Repositories: {this.props.user.public_repos}</p>
              <p>Public Gists: {this.props.user.public_gists}</p>
              <p>Location: {this.props.user.location}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {user : state.user}
};

const mapDispatchToProps = dispatch => {
  return {
    getUser : (username) => {
      dispatch(ShopAPI.getUser(username));      
    }
  }
}

const UserContainer = connect(mapStateToProps,mapDispatchToProps)(UserDetails);

export default UserContainer