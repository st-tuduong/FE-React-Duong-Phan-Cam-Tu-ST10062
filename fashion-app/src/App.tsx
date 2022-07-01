import "./App.css";
import "../src/app/stylesheet/styles.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./app/pages/home/Home";
import Header from "./app/shared/components/layout/Header";
import Footer from "./app/shared/components/layout/Footer";
import Cart from "./app/pages/cart/Cart";
import { useEffect } from "react";
import { getData } from "./app/shared/helpers/localStorage";

const App = () => {
  useEffect(() => {
    getData('cart')
  })
  return (
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/cart" element={<Cart />}/>
    </Routes>
  <Footer />
  </BrowserRouter>
  )
}

export default App;
