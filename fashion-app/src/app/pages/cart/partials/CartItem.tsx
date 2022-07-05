import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../shared/components/partials/Button";
import { storeData } from "../../../shared/helpers/localStorage";
import { ICart } from "../../../shared/interfaces/cart";
import { addCart, decreaseCart } from "../../home/home.actions";

interface ICartItemProps {
  cartItem: ICart;
}

const CartItem = ({ cartItem}: ICartItemProps) => {
  const dispatch = useDispatch();
  const {carts}  = useSelector((state: any) => state.products);
  

  const totalCart = (
    (cartItem.price - (cartItem.price * cartItem.discount) / 100) *
    cartItem.qty
  ).toFixed(2);

  const productPrice = (
    cartItem.price -
    (cartItem.price * cartItem.discount) / 100
  ).toFixed(2);

  // const handleChange = (e: any) => {
  //   const newValue = e.target.value;
  //   setQuantity(newValue);
  //   setCart([...cart]);
  //   storeData('cart', [...cart])
  // };
  
  const handleIncreaseQuantity = () => {
    dispatch(addCart({   
      product: cartItem
    }))}

    const handleDecreaseQuantity = () => {
      dispatch(decreaseCart({   
        product: cartItem
      }))}
  const handleUpdateQuantity = (value: number) => {

    // carts[index].qty += value;
    // setQuantity(quantity + value);
    // if (cartItem.qty === 0) {
    //   carts.splice(index, 1);
    // }
    // setCart([...cart]);
    // storeData("cart", [...cart]);
  }

  const handleRemoveItem = () => {
    // cart.splice(index, 1);
    // setCart([...cart]);
    // storeData("cart", [...cart]);
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
          onClick={handleDecreaseQuantity}
          text={<i className="fa-solid fa-minus"></i>}
        />
        <input
          className="quantity-input"
          type="text"
          name="quantity"
          value={cartItem.qty}
          // onChange={handleChange}
        />
        <Button
          classButton="quantity-up"
          onClick={handleIncreaseQuantity}
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
