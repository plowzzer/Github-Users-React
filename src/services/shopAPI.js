import {APIURL} from "./urlsAPI";

import {listFollowers, getUser, updateShoppingList} from "../actions/actionCreator"

export default class ShopAPI {
  static getUser(username){
    return dispatch => {
      fetch(APIURL.env + 'users/' + username)
        .then(response => response.json())
        .then(res => {
          dispatch(getUser(res));
          return res
        })
    }
  }

  static listFollowers(username){
    return dispatch => {
      fetch(APIURL.env + 'users/' + username + '/followers')
        .then(response => response.json())
        .then(res => {
          dispatch(listFollowers(res));
          return res
        })
    }
  }

  static shoppingList(users){
    return dispatch => {
      dispatch(updateShoppingList(users))
      return users
    }
  }

}