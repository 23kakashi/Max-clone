import React from "react";
import { Routes, Route } from "react-router-dom";
<<<<<<< Updated upstream
import Navbar from "../components/navbar/Navbar";
=======
// import Navbar from "../components/navbar/Navbar"
 import NavbarSecond from "../components/navbar/NavbarSecond";
 import NavbarTop from "../components/navbar/NavbarTop";
>>>>>>> Stashed changes
import Footer from "../components/footer/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Men from "../components/ProductPage/Men/Men";
import Women from "../components/ProductPage/Women/Women";
const MainRoutes = () => {
  return (
    <div>
<<<<<<< Updated upstream
      <Navbar />

=======
      <NavbarTop />
      <NavbarSecond/>
      
>>>>>>> Stashed changes
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default MainRoutes;
