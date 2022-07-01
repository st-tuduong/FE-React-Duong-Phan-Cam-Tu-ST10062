import { useState } from "react";
import { getData } from "../../../shared/helpers/localStorage";
import CartList from "./CartList";

const SectionCart = () => {
  const initialCart = getData("cart") || [];
  const [cart, setCart] = useState(initialCart);

  return (
    <>
      <table className="table table-product col-9">
        <thead>
          <tr className="cart-menu">
            <td className="image" />
            <td className="description">Product</td>
            <td className="price">Price</td>
            <td className="quantity">Quantity</td>
            <td className="total">Total</td>
            <td />
          </tr>
        </thead>
        <CartList carts={cart} />
      </table>
      <div className="sub-total col-3">
        <h4>Total</h4>
        <span className="price-total" />
      </div>
    </>
  );
};

export default SectionCart;
