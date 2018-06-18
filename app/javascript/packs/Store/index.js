import React, {Fragment} from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

class Store extends React.Component {
  state = {
    products: this.props.products,
    cart: {
      items: [],
      total: 0
    }
  }
  render() {
    const {cart, products} = this.state
    return (
      <Fragment>
        <Cart cart={cart} />
        <ProductList products={products} />
      </Fragment>
    )
  }
}

export default Store;