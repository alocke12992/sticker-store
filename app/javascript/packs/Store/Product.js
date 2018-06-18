import React from 'react';
import Sticker from './Sticker';

class Product extends React.Component {
  handleAdd = () => {
    this.props.handleAdd(this.props.product.skus.data[0].id)
  }

  handleRemove = () => {
    this.props.handleRemove(this.props.product.skus.data[0].id)
  }

  render() {
    const {product} = this.props
    return (
      <div className="product">
        <Sticker product={product} />
        <div className="cartControls">
          <p className="price">${(product.skus.data[0].price / 100).toFixed(2)}</p>
          <button onClick={this.handleAdd}>Add to Cart</button>
          <button onClick={this.handleRemove}>Remove from Cart</button>
        </div>
      </div>
    );
  }
}

export default Product;