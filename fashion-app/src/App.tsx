import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./app/pages/home/Home";
import Cart from "./app/pages/cart/Cart";
import { Header, Footer } from "./app/shared/components/layout";
import "./App.css";
import "../src/stylesheet/styles.css";
import { storeData } from "./app/shared/helpers/localStorage";
import products from "./app/shared/constant/product";

const App = () => {
  useEffect(() => {
    storeData('products', products);
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
