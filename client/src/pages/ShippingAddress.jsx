import React from "react";
import "../components/styles/ShippingAddress.css";

function ShippingAddress() {
  return (
    <div>
      <form>
        <div id="personalDetailsDiv">
          <center>
            <p>Please fill in your details</p>
          </center>
          <hr />
          <p>Enter full name</p>
          <input type="text" id="name" placeholder="Your full name" />

          <p>State</p>
          <input type="text" id="state" placeholder="Your state" />
          <p>Street Address</p>
          <input type="text" id="name" placeholder="10/45/34-23,Times square" />
          <p>City</p>
          <select id="city">
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
          <input type="number" id="postalAddress" placeholder="5000001" />
          <p>Phone Number</p>

          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="888 888 888"
          />
        </div>
      </form>
    </div>
  );
}

export default ShippingAddress;
