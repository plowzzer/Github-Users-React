import React, { Component } from 'react'

export default class CartDetails extends Component {

  remove(event){
    console.log(this)
  }

  render(){
    return(
      <div>
        <div className="uk-container uk-margin-large">
          <h1 className="uk-text-center uk-margin-large-top">Cart</h1>
          <div className="uk-child-width-1-1" data-uk-grid>
            {
              this.props.users.map(user => {
                return(
                  <div key={user.login} className="uk-card">
                    <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                      <div className="uk-width-auto">
                        <img className="uk-border-circle" width="120" height="120" src={user.avatar_url} alt={user.name + " profile picture"}/>
                      </div>
                      <div className="uk-width-expand">
                        <h3 className="uk-card-title uk-margin-remove-bottom">{user.name}</h3>
                        <p className="uk-text-meta uk-margin-remove">{user.login}</p> 
                        <div className="uk-flex" data-uk-grid>
                          <p>Followers: {user.followers}</p>
                          <p>Following: {user.following}</p>
                          <p>Public Repositories: {user.public_repos}</p>
                          <p>Public Gists: {user.public_gists}</p>
                          <p>Location: {user.location}</p>
                        </div>
                        <button onClick={this.remove.bind(this)}> remove </button>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
};
