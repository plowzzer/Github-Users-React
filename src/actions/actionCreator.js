export function getUser(obj){
  return {type:'GET', obj}
}

export function listFollowers(obj){
  return {type:'LIST', obj}
}

export function updateShoppingList(user){
  return{type:'UPDATE_LIST', user}
}

export function getShoppingList(users){
  return{type: 'GET_SHOPPING_LIST', users}
}

export function notificationAlert(message){
  return {type:'NOTIFICATION', message}
}

export function getUserDetails(userList){
  return {type:'GET_USER_DETAILS', userList}
}