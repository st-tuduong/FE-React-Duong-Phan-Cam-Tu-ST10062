import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./app/pages/home/Home";
import Cart from "./app/pages/cart/Cart";
import Register from "./app/pages/register/Register";
import { Header, Footer } from "./app/shared/components/layout";
import { ICart } from "./app/shared/interfaces/cart";
import { getData } from "./app/shared/helpers/localStorage";
import "./App.css";
import "../src/stylesheet/styles.css";

const App = () => {
  const [cart, setCart] = useState<ICart[]>([]);
  const [user, setUser] = useState(getData("account") || []);

  useEffect(() => {
    const cartItem: ICart[] = getData("cart");
    if (cartItem) setCart(cartItem);

    const account = getData("account");
    if (account) setUser(account);
  }, []);

  return (
    <BrowserRouter>
      <Header cart={cart} user={user} />
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
