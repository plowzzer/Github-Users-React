export function cart( state = [], action ){

  if(action.type === 'GET_USER_DETAILS'){
    return action.userList
  }
  
  if(action.type === 'REMOVING_USER_FROM_LIST'){
    console.log('state',state)
    console.log('action',action.user)
    let localstorageArray = []
    let finalStage = []
    let finalLocal = []

    state.forEach(element => {
      localstorageArray.push(element.login)
      if(element.login !== action.user){
        finalStage.push(element)
      }
    });

    localstorageArray.forEach(element => {
      if(element !== action.user){
        finalLocal.push(element)
      }
    })


    localStorage.setItem('userList',JSON.stringify(finalLocal));
    return finalStage
  }

  return state
}