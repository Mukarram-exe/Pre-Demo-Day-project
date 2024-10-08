import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro";
import Electronics from "./pages/Electronics";
import Furniture from "./pages/Furniture";
import Skincare from "./pages/Skincare";
import Appliances from "./pages/Appliances";
import ShippingAddress from "./pages/ShippingAddress";
import { CartProvider } from "./context/CartContext";
import Endpage from "./pages/Endpage";



function App() {
  return (
    <CartProvider>

      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/skincare" element={<Skincare />} />
          <Route path="/appliances" element={<Appliances />} />
          <Route path="/shippingaddress" element={<ShippingAddress />} />
          <Route path="/Endpage" element={<Endpage />} />  
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;