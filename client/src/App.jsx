import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro";
import Electronics from "./pages/Electronics";
import Furniture from "./pages/Furniture";
import Skincare from "./pages/Skincare";
import Appliances from "./pages/Appliances";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} /> 
        <Route path="/electronics" element={<Electronics />} /> 
        <Route path="/furniture" element={<Furniture />} /> 
        <Route path="/skincare" element={<Skincare />} />
        <Route path="/appliances" element={<Appliances />} />  
      </Routes>
    </Router>
  );
}

export default App;