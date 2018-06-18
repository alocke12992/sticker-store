import React, {Fragment} from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

class Store extends React.Component {
  state = {
    products: this.props.products,
    cart: {
      items: {},
      total: 0
    }
  }

  addToCart = (sku) => {
    let cart = this.state.cart
    cart.items[sku] = cart.items[sku] + 1 || 1
    this.setState({cart})
  }

  removeFromCart = (sku) => {

  }

  render() {
    const {cart, products} = this.state
    return (
      <Fragment>
        <Cart cart={cart} />
        <ProductList
          products={products}
          handleAdd={this.addToCart}
          handleRemove={this.removeFromCart}
        />
      </Fragment>
    )
  }
}

export default Store;