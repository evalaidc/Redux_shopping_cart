export default(state = [], action) => {
  switch(action.type){
    case 'ADD_ITEM':
      return [...state, action.item]
    default:
      return state
    case 'DELETE_ITEM':
      return[...state.filter(element => element !== action.item) ]
  }
}
