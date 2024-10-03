import React from "react";
import macbook from "./images/macbook.jpg"
import ps5 from "./images/PS5.webp"
import vaccumcleaner from "./images/vaccum cleaner.jpg"
import TV from "./images/TV.webp"
import SMARTWATCH from "./images/SMARTWATCH.webp"
import router from "./images/router.jpeg"
import iphone15 from "./images/iphone 15.jpg"
import DSLR from "./images/DSLR.jpg"
import AC from "./images/AC.avif"
import "../components/styles/Electronics.css"
import Navbar from "../components/Navbar"
import { CartContext } from '../context/CartContext'
import { useContext } from 'react';



function Electronics() {
  const { addToCart } = useContext(CartContext);

  const addToCartHandler =(e)=>{
    e.preventDefault();
    console.log("I am clicked");
    addToCart();
  }
  return (
    <div>
      <Navbar />
      <h1 className="heading">Discover new era gadgets!</h1>
      <div className="product-list">
        
        <div className="product-item">
          <img src={macbook} alt="MacBook" className="product-image" />
          <p className="product-name">MacBook</p>
          <p className="product-price">$1,299.99</p>
          <button className="add-to-cart-button" onClick={addToCartHandler}>
          Add to Cart
        </button>        
        </div>

        
        <div className="product-item">
          <img src={ps5} alt="PS5" className="product-image" />
          <p className="product-name">PlayStation 5</p>
          <p className="product-price">$499.99</p>
          <button className="add-to-cart-button" onClick={addToCartHandler}>
          Add to Cart
        </button>        </div>

        
        <div className="product-item">
          <img src={vaccumcleaner} alt="Vacuum Cleaner" className="product-image" />
          <p className="product-name">Vacuum Cleaner</p>
          <p className="product-price">$149.99</p>
          <button className="add-to-cart-button" onClick={addToCartHandler}>
          Add to Cart
        </button>        </div>

        
        <div className="product-item">
          <img src={TV} alt="TV" className="product-image" />
          <p className="product-name">Smart TV</p>
          <p className="product-price">$799.99</p>
          <button className="add-to-cart-button" onClick={addToCartHandler}>
          Add to Cart
        </button>        </div>

        
        <div className="product-item">
          <img src={SMARTWATCH} alt="Smartwatch" className="product-image" />
          <p className="product-name">Smartwatch</p>
          <p className="product-price">$199.99</p>
          <button className="add-to-cart-button" onClick={addToCartHandler}>
          Add to Cart
        </button>        </div>

       
        <div className="product-item">
          <img src={router} alt="Router" className="product-image" />
          <p className="product-name">WiFi Router</p>
          <p className="product-price">$79.99</p>
          <button className="add-to-cart-button" onClick={addToCartHandler}>
          Add to Cart
        </button>        </div>

        
        <div className="product-item">
          <img src={iphone15} alt="iPhone 15" className="product-image" />
          <p className="product-name">iPhone 15</p>
          <p className="product-price">$1,099.99</p>
          <button className="add-to-cart-button" onClick={addToCartHandler}>
          Add to Cart
        </button>        </div>

       
        <div className="product-item">
          <img src={DSLR} alt="DSLR Camera" className="product-image" />
          <p className="product-name">DSLR Camera</p>
          <p className="product-price">$899.99</p>
          <button className="add-to-cart-button" onClick={addToCartHandler}>
          Add to Cart
        </button>        </div>

        
        <div className="product-item">
          <img src={AC} alt="Air Conditioner" className="product-image" />
          <p className="product-name">Air Conditioner</p>
          <p className="product-price">$599.99</p>
          <button className="add-to-cart-button" onClick={addToCartHandler}>
          Add to Cart
        </button>        </div>
      </div>
      
    </div>
  );
}

export default Electronics;

