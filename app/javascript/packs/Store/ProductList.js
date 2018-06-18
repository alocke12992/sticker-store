import React from 'react';
import Product from './Product';

const ProductList = ({products, handleAdd, handleRemove}) => {
  return (
    <div>
      {products.map(product => {
        return (<Product key={product.id} product={product} handleAdd={handleAdd} handleRemove={handleRemove} />)
      })}
    </div>
  );
};

export default ProductList;