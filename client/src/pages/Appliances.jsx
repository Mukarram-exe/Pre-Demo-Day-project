import React from 'react'
import toaster from "./images/appliances/toaster.avif"
import ricecooker from "./images/appliances/rice cooker.jpg"
import oven from "./images/appliances/oven.avif"
import MIXER from "./images/appliances/MIXER.webp"
import hairdryer from "./images/appliances/hair dryer.png"
import fridge from "./images/appliances/fridge.webp"
import deeepfryer from "./images/appliances/Deep fryer.jpg"
import coffeemachine from "./images/appliances/coffee machine.webp"
import airfryer from "./images/appliances/aAir fryer.jpg"
import "../components/styles/Appliances.css"
import Navbar from "../components/Navbar"
import { CartContext } from '../context/CartContext'
import { useContext } from 'react';



function Appliances() {
  const { addToCart } = useContext(CartContext);

  const addToCartHandler = (product) => {
    console.log("Item added to cart:", product.name);
    addToCart(product);
  };

  const products = [
    { name: 'Air Fryer', price: 99.99, image: airfryer },
    { name: 'Toaster', price: 29.99, image: toaster },
    { name: 'Rice Cooker', price: 59.99, image: ricecooker },
    { name: 'Oven', price: 199.99, image: oven },
    { name: 'Mixer', price: 24.99, image: hairdryer },
    { name: 'Hair Dryer', price: 89.99, image: MIXER },
    { name: 'Deep Fryer', price: 49.99, image: deeepfryer },
    { name: 'Fridge', price: 799.99, image: fridge },
    { name: 'Coffee Machine', price: 149.99, image: coffeemachine },
  ];

  return (
    <div>
      <Navbar />
      <h1 className="heading">Smart Appliances for Effortless Living</h1>
      <div className="product-list">
        {/* <div className="product-item">
          <img src={product.image} alt={product.name} className="product-image" />
          <p className="product-name">{product.name}</p>
          <p className="product-price">${product.price}</p>
          <button className="add-to-cart-button" onClick={addToCartHandler}>
            Add to Cart
          </button>
        </div> */}
      {products.map((product, index) => (
          <div className="product-item" key={index}>
            <img src={product.image} alt={product.name} className="product-image" />
            <p className="product-name">{product.name}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button 
              className="add-to-cart-button" 
              onClick={() => addToCartHandler(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}


      </div>
    </div>
  );
}

export default Appliances;