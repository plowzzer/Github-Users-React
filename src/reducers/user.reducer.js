export function user( state = '', action ){
  if(action.type === 'GET'){
    return action.obj
  }

  return state
}