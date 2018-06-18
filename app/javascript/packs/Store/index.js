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
    cart.items[sku.id] = cart.items[sku.id] + 1 || 1
    cart.total += sku.price
    this.setState({cart})
  }

  removeFromCart = (sku) => {
    let cart = this.state.cart
    if (sku.id in cart.items && cart.items[sku.id] > 0) {
      cart.items[sku.id] = cart.items[sku.id] - 1
      cart.total -= sku.price
      this.setState({cart})
    }
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