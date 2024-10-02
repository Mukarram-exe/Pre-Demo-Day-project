import React from 'react'
import toaster from "./images/appliances/toaster.avif"
import ricecooker from "./images/appliances/rice cooker.jpg"
import oven from "./images/appliances/oven.avif"
import MIXER  from "./images/appliances/MIXER.webp"
import hairdryer from "./images/appliances/hair dryer.png"
import fridge from "./images/appliances/fridge.webp"
import deeepfryer from "./images/appliances/Deep fryer.jpg"
import coffeemachine from "./images/appliances/coffee machine.webp"
import airfryer from "./images/appliances/aAir fryer.jpg"
import "../components/styles/Appliances.css"
import Navbar from "../components/Navbar"




function Appliances() {
    return (
      <div>
        <Navbar />
        <h1 className="heading">Smart Appliances for Effortless Living</h1>
        <div className="product-list">
          
          <div className="product-item">
            <img src={toaster} alt="Toaster" className="product-image" />
            <p className="product-name">Toaster</p>
            <p className="product-price">$29.99</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
  
          
          <div className="product-item">
            <img src={ricecooker} alt="Rice Cooker" className="product-image" />
            <p className="product-name">Rice Cooker</p>
            <p className="product-price">$59.99</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
  
          
          <div className="product-item">
            <img src={oven} alt="Oven" className="product-image" />
            <p className="product-name">Oven</p>
            <p className="product-price">$199.99</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
  
          
          <div className="product-item">
            <img src={MIXER} alt="Mixer" className="product-image" />
            <p className="product-name">Mixer</p>
            <p className="product-price">$89.99</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
  
          
          <div className="product-item">
            <img src={hairdryer} alt="Hair Dryer" className="product-image" />
            <p className="product-name">Hair Dryer</p>
            <p className="product-price">$24.99</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
  
          
          <div className="product-item">
            <img src={fridge} alt="Fridge" className="product-image" />
            <p className="product-name">Fridge</p>
            <p className="product-price">$799.99</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
  
         
          <div className="product-item">
            <img src={deeepfryer} alt="Deep Fryer" className="product-image" />
            <p className="product-name">Deep Fryer</p>
            <p className="product-price">$49.99</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
  
          
          <div className="product-item">
            <img src={coffeemachine} alt="Coffee Machine" className="product-image" />
            <p className="product-name">Coffee Machine</p>
            <p className="product-price">$149.99</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
  
         
          <div className="product-item">
            <img src={airfryer} alt="Air Fryer" className="product-image" />
            <p className="product-name">Air Fryer</p>
            <p className="product-price">$99.99</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Appliances;