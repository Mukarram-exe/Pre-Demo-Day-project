import React, { useState } from "react";
import axios from 'axios'; 
import "../components/styles/ShippingAddress.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { CartContext } from '../context/CartContext'
import { useContext } from 'react';


function ShippingAddress() {

  const { addToCart } = useContext(CartContext);

  const addToCartHandler =(e)=>{
    e.preventDefault();
    console.log("I am clicked");
    addToCart();
  }

const navigate = useNavigate();
  const [formData, setFormData] = useState({
    
  });

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/shippingdetails', formData);
      console.log(data);
      await navigate("/Endpage")
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Navbar/>
      <form onSubmit={onSubmitHandler}>
        <div id="personalDetailsDiv">
          <center>
            <p style={{fontSize:"35px"}}>Please fill in your details</p>
          </center>
          <hr />
          <p style={{marginLeft:"15px" , fontSize:"30px"}}>Enter full name</p>
          <input onChange={onChangeHandler} type="text" name="fullname" placeholder="Your full name" />

          <p style={{marginLeft:"15px" , fontSize:"30px"}}>State</p>
          <input onChange={onChangeHandler} name="state" type="text" placeholder="Your state" value={"Telangana"} readOnly/>

          <p style={{marginLeft:"15px" , fontSize:"30px"}}>Street Address</p>
          <input onChange={onChangeHandler} type="text" name="street" placeholder="10/45/34-23, Times square" />

          <p style={{marginLeft:"15px" , fontSize:"30px"}}>City</p>
          <select onChange={onChangeHandler} name="city" id="city">
            <option value="">Select City</option>
            <option value="Adilabad">Adilabad</option>
            <option value="Alampur">Alampur</option>
            <option value="Andol">Andol</option>
            <option value="Asifabad">Asifabad</option>
            <option value="Balapur">Balapur</option>
            <option value="Banswada">Banswada</option>
            <option value="Bellampalli">Bellampalli</option>
            <option value="Bhadrachalam">Bhadrachalam</option>
            <option value="Bhaisa">Bhaisa</option>
            <option value="Bhongir">Bhongir</option>
            <option value="Bodhan">Bodhan</option>
            <option value="Chandur">Chandur</option>
            <option value="Chatakonda">Chatakonda</option>
            <option value="Dasnapur">Dasnapur</option>
            <option value="Devarkonda">Devarkonda</option>
            <option value="Dornakal">Dornakal</option>
            <option value="Farrukhnagar">Farrukhnagar</option>
            <option value="Gaddi Annaram">Gaddi Annaram</option>
            <option value="Gadwal">Gadwal</option>
            <option value="Ghatkesar">Ghatkesar</option>
            <option value="Gopalur">Gopalur</option>
            <option value="Gudur">Gudur</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Jagtial">Jagtial</option>
            <option value="Jangaon">Jangaon</option>
            <option value="Karimnagar">Karimnagar</option>
            <option value="Khammam">Khammam</option>
            <option value="Warangal">Warangal</option>
          </select>

          <p style={{marginLeft:"15px" , fontSize:"30px"}}>Postal Address</p>
          <input onChange={onChangeHandler} name="postal" type="number" placeholder="5000001" />

          <p style={{marginLeft:"15px" , fontSize:"30px"}}>Phone Number</p>
          <input
            onChange={onChangeHandler}
            type="tel"
            name="phoneNumber" 
            placeholder="888 888 888"
          /> <br />

          <center>
            
            <button type="submit" className="btn btn-primary" style={{marginTop:"5px", marginLeft:"15px"}} >Submit</button> 
            </center>
        </div>
      </form>
    </div>
  );
}

export default ShippingAddress;
