import { log } from "console";
import React, { useState } from "react";
import Button from "../../../shared/components/partials/Button";
import { getData, storeData } from "../../../shared/helpers/localStorage";
import { ICart } from "../../../shared/interfaces/cart";

const CartItem = ({id, img, name, price, discount, qty }: ICart) => {
  const [quantity, setQuantity] = useState(qty);
  const listCart = getData("cart") || [];
  const cartItem = listCart.findIndex((item: ICart) => item.id === id)
  const handleUpdateQuantity = (isIncreased = true) => {
    if(isIncreased) {
      qty += 1;
      setQuantity(qty)
      listCart[cartItem].qty += 1;
    }else {
      qty -= 1;
      setQuantity(qty)
      listCart[cartItem].qty -= 1;
    }
    
    storeData('cart', listCart)    
  };

  return (
    <tr className="product-item">
      <td className="product-image cart-img">
        <img src={img} alt={name} />
      </td>
      <td className="product-name">
        <h3>{name}</h3>
      </td>
      <td className="product-price">
        ${(price - (price * discount) / 100).toFixed(2)}
      </td>
      <td className="cart-quantitybutton">
        <a className="quantity-up" onClick={() => handleUpdateQuantity(true)}>
          <i className="fa-solid fa-plus"></i>
        </a>
        <input
          className="quantity-input"
          type="text"
          name="quantity"
          value={quantity}
        />
        <a className="quantity-down" onClick={() => handleUpdateQuantity(false)}>
          <i className="fa-solid fa-minus"></i>
        </a>
      </td>
      <td className="cart-totalprice">
        ${((price - (price * discount) / 100) * quantity).toFixed(2)}
      </td>
      <td>
        <Button
          className="cart-quantitydelete"
          type="remove"
          text="Remove"
          classCol=""
        />
      </td>
    </tr>
  );
};

export default CartItem;
