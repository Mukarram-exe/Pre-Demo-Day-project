import React from 'react'
import Sunscreen from "./images/skin care/Sunscreen.jpg"
import serum from "./images/skin care/serum.jpg"
import moisturizer from "./images/skin care/Moisturizer.webp"
import facewash from "./images/skin care/FACE WASH.jpg"
import facemask from "./images/skin care/Face mask.avif"
import Cleanser from "./images/skin care/Cleanser.webp"
import Navbar from "../components/Navbar"
import { CartContext } from '../context/CartContext'
import { useContext } from 'react';



function Skincare() {
  const { addToCart } = useContext(CartContext);

  const addToCartHandler =(e)=>{
    e.preventDefault();
    console.log("I am clicked");
    addToCart();
  }
  return (
    <div>
      <Navbar />
      <h1 className='heading'>Discover Your Perfect Skincare Products!</h1>
      <div className="product-list">
        
        <div className="product-item">
          <img src={Sunscreen} alt="Sunscreen" className="product-image" />
          <p className="product-name">Sunscreen</p>
          <p className="product-price">$24.99</p>
          <button className="add-to-cart-button" onClick={addToCartHandler}>
          Add to Cart
        </button>        </div>

        
        <div className="product-item">
          <img src={serum} alt="Serum" className="product-image" />
          <p className="product-name">Serum</p>
          <p className="product-price">$29.99</p>
          <button className="add-to-cart-button" onClick={addToCartHandler}>
          Add to Cart
        </button>        </div>

        
        <div className="product-item">
          <img src={moisturizer} alt="Moisturizer" className="product-image" />
          <p className="product-name">Moisturizer</p>
          <p className="product-price">$19.99</p>
          <button className="add-to-cart-button" onClick={addToCartHandler}>
          Add to Cart
        </button>        </div>

        
        <div className="product-item">
          <img src={facewash} alt="Face Wash" className="product-image" />
          <p className="product-name">Face Wash</p>
          <p className="product-price">$15.99</p>
          <button className="add-to-cart-button" onClick={addToCartHandler}>
          Add to Cart
        </button>        </div>

        <div className="product-item">
          <img src={facemask} alt="Face Mask" className="product-image" />
          <p className="product-name">Face Mask</p>
          <p className="product-price">$12.99</p>
          <button className="add-to-cart-button" onClick={addToCartHandler}>
          Add to Cart
        </button>        </div>

       
        <div className="product-item">
          <img src={Cleanser} alt="Cleanser" className="product-image" />
          <p className="product-name">Cleanser</p>
          <p className="product-price">$18.99</p>
          <button className="add-to-cart-button" onClick={addToCartHandler}>
          Add to Cart
        </button>        </div>
      </div>
    </div>
  )
}

export default Skincare