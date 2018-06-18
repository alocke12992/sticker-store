import React from 'react';
import Sticker from './Sticker';

const Product = ({product}) => {
  return (
    <div className="product">
      <Sticker product={product} />
      <div className="cartControls">
        <button>Add to Cart</button>
        <button>Remove from Cart</button>
      </div>
    </div>
  );
};

export default Product;