export function shop( state = [], action ){
  if(action.type === 'LIST'){
    return action.obj
  }

  return state
}