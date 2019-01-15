export function cart( state = [], action ){

  if(action.type === 'GET_USER_DETAILS'){
    return action.userList
  }
  

  return state
}