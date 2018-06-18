import React from 'react';

const Cart = ({cart}) => {
  return (
    <div className="cart">
      Total: ${cart.total / 100}
    </div>
  );
};

export default Cart;