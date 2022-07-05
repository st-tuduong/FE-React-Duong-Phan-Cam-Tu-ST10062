import React, { useState } from "react";
import Button from "../../../shared/components/partials/Button";
import { storeData } from "../../../shared/helpers/localStorage";
import { ICart } from "../../../shared/interfaces/cart";

interface ICartItemProps {
  cartItem: ICart;
  cart: any;
  setCart: any;
}

const CartItem = ({ cartItem, cart, setCart }: ICartItemProps) => {
  const [quantity, setQuantity] = useState(cartItem.qty);
  const index = cart.findIndex((item: ICart) => item.id === cartItem.id);

  const totalCart = (
    (cartItem.price - (cartItem.price * cartItem.discount) / 100) *
    cartItem.qty
  ).toFixed(2);

  const productPrice = (
    cartItem.price -
    (cartItem.price * cartItem.discount) / 100
  ).toFixed(2);

  const handleUpdateQuantity = (value: number) => {
    cart[index].qty += value;
    setQuantity(quantity + value);
    if (cartItem.qty === 0) {
      cart.splice(index, 1);
    }
    setCart([...cart]);
    storeData('cart', [...cart]);
  };

  const handleRemoveItem = () => {
    cart.splice(index, 1);
    setCart([...cart]);
    storeData('cart', [...cart]);
  };

  return (
    <tr className="product-item">
      <td className="product-image cart-img">
        <img src={cartItem.img} alt={cartItem.name} />
      </td>
      <td className="product-name">
        <h3>{cartItem.name}</h3>
      </td>
      <td className="product-price">${productPrice}</td>
      <td className="cart-quantitybutton">
        <Button
          classButton="quantity-down"
          onClick={() => handleUpdateQuantity(-1)}
          text={<i className="fa-solid fa-minus"></i>}
        />
        <input
          className="quantity-input"
          type="text"
          name="quantity"
          value={quantity}
        />
        <Button
          classButton="quantity-up"
          onClick={() => handleUpdateQuantity(1)}
          text={<i className="fa-solid fa-plus"></i>}
        />
      </td>
      <td className="cart-totalprice">${totalCart}</td>
      <td>
        <Button
          classButton="cart-quantitydelete"
          type="remove"
          text="Remove"
          onClick={handleRemoveItem}
        />
      </td>
    </tr>
  );
};

export default CartItem;
