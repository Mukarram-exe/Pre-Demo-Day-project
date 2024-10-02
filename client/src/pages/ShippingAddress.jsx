import React, { useState } from "react";
import axios from 'axios'; // Make sure the casing is correct
import "../components/styles/ShippingAddress.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";


function ShippingAddress() {
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
            <p>Please fill in your details</p>
          </center>
          <hr />
          <p>Enter full name</p>
          <input onChange={onChangeHandler} type="text" name="fullname" placeholder="Your full name" />

          <p>State</p>
          <input onChange={onChangeHandler} name="state" type="text" placeholder="Your state" value={"Telangana"} readOnly/>

          <p>Street Address</p>
          <input onChange={onChangeHandler} type="text" name="street" placeholder="10/45/34-23, Times square" />

          <p>City</p>
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

          <p>Postal Address</p>
          <input onChange={onChangeHandler} name="postal" type="number" placeholder="5000001" />

          <p>Phone Number</p>
          <input
            onChange={onChangeHandler}
            type="tel"
            name="phoneNumber" // Correct the name to match the state
            placeholder="888 888 888"
          />

          <button type="submit" >Submit</button> {/* Set type to submit */}
        </div>
      </form>
    </div>
  );
}

export default ShippingAddress;
