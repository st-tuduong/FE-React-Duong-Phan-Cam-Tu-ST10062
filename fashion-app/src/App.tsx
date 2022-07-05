import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./app/pages/home/Home";
import Cart from "./app/pages/cart/Cart";
import { Header, Footer } from "./app/shared/components/layout";
import { ICart } from "./app/shared/interfaces/cart";
import { getData } from "./app/shared/helpers/localStorage";
import "./App.css";
import "../src/stylesheet/styles.css";

const App = () => {
  const [cart, setCart] = useState<ICart[]>([]);

  useEffect(() => {
    const cartItem: ICart[] = getData("cart");
    setCart(cartItem);
  }, []);

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
