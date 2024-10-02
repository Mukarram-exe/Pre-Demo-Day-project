import React from "react";
import "./styles/Intro.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function Intro() {
  const navigate = useNavigate()
  return (
    <div>
      <center>
        <Navbar />
        <div id="hello">
          <p style={{ fontSize: "200px", color: "black" }}>Hello!</p>
          <p style={{ fontSize: "50px" }}>Buy your favourite products here</p>
          <hr />
          <div className="button-container">
            <button className="custom-button" onClick={() => navigate("/appliances")}>Appliances</button>
            <button className="custom-button" onClick={() => navigate("/furniture")}>Furniture</button>
            <button className="custom-button" onClick={() => navigate("/skincare")}>Skincare</button>
            <button className="custom-button"  onClick={() => navigate("/electronics")}>Electronics</button>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Intro;