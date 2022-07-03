import "./App.css";
import "../src/app/stylesheet/styles.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./app/pages/home/Home";
import Header from "./app/shared/components/layout/Header";
import Footer from "./app/shared/components/layout/Footer";
import Cart from "./app/pages/cart/Cart";
import { useEffect, useState } from "react";
import { ICart } from "./app/shared/interfaces/cart";
import { getData } from "./app/shared/helpers/localStorage";

const App = () => {
  const [cart, setCart] = useState<ICart[]>([])
  useEffect(() => {
    const cartItem: ICart[] = getData('cart')
    if(cartItem)
    setCart(cartItem)
  }, [])
  return (
  <BrowserRouter>
  <Header cart={cart}/>
    <Routes>
      <Route path="/" element={<Home cart={cart} setCart={setCart}/>}/>
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
    </Routes>
  <Footer />
  </BrowserRouter>
  )
}

export default App;
