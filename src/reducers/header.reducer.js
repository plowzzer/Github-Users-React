export function header(state=[], action){
  if(action.type === 'NOTIFICATION'){
    return action.msg;
  }

  if(action.type === 'UPDATE_LIST'){
    const userArray = state.concat()
    const newUser = action.user
    let verify = false

    state.forEach(element => {
      if (element === action.user) verify = true
    });

    if(verify === false ){
      userArray.push(newUser)
    }
    
    console.log(newUser, userArray)
    return userArray
  }

  return state
}