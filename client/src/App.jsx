import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro";
import Electronics from "./pages/Electronics";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} /> 
        <Route path="/electronics" element={<Electronics />} /> 
      </Routes>
    </Router>
  );
}

export default App;