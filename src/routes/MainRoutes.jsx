import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
const MainRoutes = () => {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default MainRoutes;
