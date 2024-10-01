import React from "react";
import "./styles/Intro.css";

function Intro() {
  return (
    <div>
      <center>
        <form>
          <p style={{ fontSize: "200px", color: "black" }}>Hello!</p>
          <p style={{ fontSize: "50px" }}>Buy your favourite products here</p>
          <hr />
          <button>Appliances</button>
          <br />
          <button>Furniture</button>
          <br />
          <button>Skincare</button>
          <br />
          <button>Electronics</button>
        </form>
      </center>
    </div>
  );
}

export default Intro;
