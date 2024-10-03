import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { cartCount } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#007bff', // Primary color
        padding: '10px 20px',
      }}
      data-bs-theme="dark"
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="white"
          viewBox="0 0 16 16"
          style={{ marginRight: '5px' }} 
        >
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
        </svg>
        <p
          style={{
            color: 'white',
            fontSize: '36px',
            
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
          }}
        >
          SnapBuy
        </p>
      </div>
      
      <h1 style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
        <button
          onClick={() => navigate("/ShippingAddress")}
          style={{
            backgroundColor: "green", 
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            marginRight: '15px',
            fontSize: '20px',
            
            
          }}
        >
          Checkout
        </button>
        <i
          className="bi bi-cart3"
          style={{
            color: 'white',
            fontSize: '24px',
            marginRight: '10px',
          }}
        ></i>
        <input
          style={{
            width: '55px',
            backgroundColor: 'transparent',
            border: 'none',
            textAlign: 'center',
            color: 'white',
            fontSize: '20px',
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