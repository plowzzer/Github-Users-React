import {APIURL} from "./urlsAPI";
import {listFollowers, getUser, updateShoppingList, getShoppingList, getUserDetails} from "../actions/actionCreator"

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

  static getShoppingList(users){
    return dispatch => {
      dispatch(getShoppingList(users))
      return users
    }
  }


  static getUserDetails(userList){
    return dispatch => {
      // console.log(JSON.parse(userList))
      let newList = userList
      let fetchList = []
      newList.forEach(username => {
        fetchList.push(fetch(APIURL.env + 'users/' + username).then(response => response.json()))
      });

      Promise.all(fetchList)
        .then(res => {
          dispatch(getUserDetails(res))
          return res
        })
    }
  }

}