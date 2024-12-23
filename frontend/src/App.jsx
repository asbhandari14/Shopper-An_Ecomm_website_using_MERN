import React from "react";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import ShopCategory from "./Pages/ShopCategory";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Cart from "./Pages/Cart";
import ProductDisplay from "./Pages/ProductDisplay";
import Checkout from "./Pages/Checkout";
import Admin from "./Pages/Admin";
import MyOrder from "./Components/MyOrder";
import HiddenNavbar from "./Components/HiddenNavbar";




const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <HiddenNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<ShopCategory category="men" />} />
          <Route path="/women" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kids" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<ProductDisplay />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/myOrder" element={<MyOrder />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;