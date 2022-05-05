import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer";
import Home from "../pages/Home";
import Checkout from "../components/Checkout/Checkout";
const MainRoutes = () => {
  return (
    <div>
           {/* <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer /> */}
      <Checkout/>
    </div>
  );
};

export default MainRoutes;
