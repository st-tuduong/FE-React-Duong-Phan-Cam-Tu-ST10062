import * as TYPES from '../../shared/constant/types';
export const addCart = (cart: any) => {  
  return {
    type: TYPES.ADD_CART,
    payload: cart,
  };
};

export const handleCart = (cart: any, value: number) => {
  return {
    type: TYPES.HANDLE_QUANTITY,
    payload: {cart, value}
  };
};

export const removeCart = (cart: any) => {
  return {
    type: TYPES.REMOVE_ITEM,
    payload: cart,
  };
};
