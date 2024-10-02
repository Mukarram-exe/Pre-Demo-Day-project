// Navbar.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Navbar() {
  const { cartCount } = useContext(CartContext);

  return (
    <nav className="navbar bg-primary" data-bs-theme="dark">
      <h1 style={{ color: 'white', marginLeft: '10px' }}>SnapBuy</h1>
      <h1>
        
        <i className="bi bi-cart3"></i>
        <input
          style={{
            width: '65px',
            backgroundColor: 'transparent',
            border: 'none',
            textAlign: 'center',
            color: 'white',
          }}
          value={cartCount}
          readOnly
          className="cart"
          type="number"
        />
      </h1>
    </nav>
  );
}

export default Navbar;