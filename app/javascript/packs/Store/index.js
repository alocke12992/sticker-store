import React, {Fragment} from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import axios from 'axios';

class Store extends React.Component {
  state = {
    products: this.props.products,
    cart: {
      items: {},
      total: 0,
      message: ''
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

  onToken = (token) => {
    const data = {...token, cart: this.state.cart}
    axios({
      url: '/charges',
      data: data,
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
      }
    })
      .then(res => {
        let message = res.data.message
        this.setState({message: message, cart: {item: {}, total: 0}})
      })
  }

  render() {
    const {cart, products} = this.state
    return (
      <Fragment>
        <h3>{this.state.message}</h3>
        <Cart cart={cart} onToken={this.onToken} />
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