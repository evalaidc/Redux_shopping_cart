// Action creator
// called from a button in the user interface
export const addToCart = (item) => {

  // console.log is a side effect and technically makes this fucntion 'impure'
  // comes in handy when testing to see if redux was integrated successfully
  // to see if actions are firing
  console.log(`ACTION: adding ${item} to cart`)
  return {
    // action naming conventions - all caps with snake-case using
    // JAVASCRIPT_CONSTANT naming convention
    type: 'ADD_ITEM',
    // ES6 short for {item: item}
    item
  }
}
