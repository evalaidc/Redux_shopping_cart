import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
// instead of using store.subscribe(), we can generate container components
// through react-redux
import { connect } from 'react-redux'

import * as CartActions from '../actions/CartActions'
import Shelf from '../components/Shelf'

class Cart extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    const CartItems = this.props.cart.map( (item, id) => {
      return (
        <li key={id}>
          {item}
        </li>
      )
    })

    return (
      <div>
        <Shelf addItem={this.props.actions.addToCart} deleteItem={this.props.actions.deleteFromCart}/>
        <h2> Cart </h2>
        <ol>
          {CartItems}
        </ol>
      </div>
    )
  }

}

// state being mapped to props in redux state
  // didn't use props but would use it if we had info that was pertinent to the state.
      // ex: function mapStateToProps(state, props){
            // return {
              // user: state.users[props.userId]
            // }
          // }
function mapStateToProps(state, props) {
  return {
    cart: state.cart
  };
}

// the changes that happen when new actions occur
function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(CartActions, dispatch)
  }
}




// could have shortened lines below this point into:
// export default connect(mapStateToProps, mapDispatchToProps)(Cart)

// return wrapper that we pass component into
const connection = connect(mapStateToProps, mapDispatchToProps)

// wraps Cart component with store connection configured above
const wrappedComponent = connection(Cart)

export default wrappedComponent
