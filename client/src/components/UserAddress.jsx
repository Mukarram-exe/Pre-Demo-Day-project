import React, { useState, useEffect } from 'react';
import data from "../../../server/data.json";
import "./styles/UserAddress.css"

const UserAddress = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setUserData(data);
  }, []);

  if (userData.length === 0) {
    return <p>Loading user addresses...</p>;
  }

  const lastUser = userData[userData.length - 1]; 

  return (
    <div className="user-address">
     <center>
        <h1> Hello {lastUser.fullname}! your order has being placed shipping to address</h1>
     
      <p>{lastUser.street}, {lastUser.city}, Telengana</p>
      
      <p>Postal Code: {lastUser.postal}</p>
      <p>Phone Number: {lastUser.phoneNumber}</p>
     </center>
    </div>
  );
};

export default UserAddress;