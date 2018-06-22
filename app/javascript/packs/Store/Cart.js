import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Cart = ({cart, onToken}) => {
  return (
    <div className="cart">
      Total: ${cart.total / 100}
      {cart.total > 0 &&
        <StripeCheckout
          token={onToken}
          stripeKey=""
          description="Stickers from Locked-Down-Stickers"
          amount={cart.total}
          label="Checkout"
          billingAddress={true}
          shippingAddress={true}
        />
      }
    </div>
  );
};

export default Cart;