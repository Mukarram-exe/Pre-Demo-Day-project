import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function OrderDetails() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="user-address">
      <center>
      <h1>Order Details</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} style={{ width: '50px' }} />
              <p>{item.name}</p>
              <p>${item.price}</p>
            </li>
          ))}
        </ul>
      )}
      </center>
    </div>
  );
}

export default OrderDetails;
