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

    localStorage.setItem('userList',JSON.stringify(userArray));
    return userArray
  }

  if(action.type === 'GET_SHOPPING_LIST'){
    
    let userList=[]
    const myusers = JSON.parse(action.users)

    myusers.forEach(element => {
      userList.push(element)
    });

    console.log(userList)
    return userList
  }

  return state
}