import React from 'react'
import armchair from "./images/furniture/arm chair.avif"
import sofa from "./images/furniture/sofa.jpg"
import lawnchair from "./images/furniture/lawn chair sert.jpg"
import table from "./images/furniture/Dining table.avif"
import mattress from "./images/furniture/desktop-wallpaper-3-mattress-mattress.jpg"
import bookshelf from "./images/furniture/Bookshelf.jpg"
import bedframe from "./images/furniture/Bed frame.jpeg"
import Navbar from "../components/Navbar"
import { CartContext } from '../context/CartContext'
import { useContext } from 'react';



function Furniture() {
  const { addToCart } = useContext(CartContext);

  const addToCartHandler =(e)=>{
    e.preventDefault();
    console.log("I am clicked");
    addToCart();
  }
  return (
    <div>
      <Navbar />
    <h1 className="heading">Elevate Your Space with Stylish Furniture Essentials.</h1>
    <div className="product-list">
      
      <div className="product-item">
        <img src={armchair} alt="Arm Chair" className="product-image" />
        <p className="product-name">Arm Chair</p>
        <p className="product-price">$249.99</p>
        <button className="add-to-cart-button" onClick={addToCartHandler}>
          Add to Cart
        </button>      </div>

      
      <div className="product-item">
        <img src={sofa} alt="Sofa" className="product-image" />
        <p className="product-name">Sofa</p>
        <p className="product-price">$599.99</p>
        <button className="add-to-cart-button" onClick={addToCartHandler}>
          Add to Cart
        </button>      </div>

      
      <div className="product-item">
        <img src={lawnchair} alt="Lawn Chair Set" className="product-image" />
        <p className="product-name">Lawn Chair Set</p>
        <p className="product-price">$199.99</p>
        <button className="add-to-cart-button" onClick={addToCartHandler}>
          Add to Cart
        </button>      </div>

      
      <div className="product-item">
        <img src={table} alt="Dining Table" className="product-image" />
        <p className="product-name">Dining Table</p>
        <p className="product-price">$899.99</p>
        <button className="add-to-cart-button" onClick={addToCartHandler}>
          Add to Cart
        </button>      </div>

      
      <div className="product-item">
        <img src={mattress} alt="Mattress" className="product-image" />
        <p className="product-name">Mattress</p>
        <p className="product-price">$399.99</p>
        <button className="add-to-cart-button" onClick={addToCartHandler}>
          Add to Cart
        </button>      </div>

      
      <div className="product-item">
        <img src={bookshelf} alt="Bookshelf" className="product-image" />
        <p className="product-name">Bookshelf</p>
        <p className="product-price">$149.99</p>
        <button className="add-to-cart-button" onClick={addToCartHandler}>
          Add to Cart
        </button>      </div>

      
      <div className="product-item">
        <img src={bedframe} alt="Bed Frame" className="product-image" />
        <p className="product-name">Bed Frame</p>
        <p className="product-price">$499.99</p>
        <button className="add-to-cart-button" onClick={addToCartHandler}>
          Add to Cart
        </button>      </div>
    </div>
  </div>
  )
}

export default Furniture