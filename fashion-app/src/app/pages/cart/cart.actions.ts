import * as TYPES from '../../shared/constant/types';
export const addCart = (product: any) => {  
  return {
    type: TYPES.ADD_CART,
    payload: product,
  };
};

export const handleQuantityCart = (cart: any, value: number) => {
  return {
    type: TYPES.HANDLE_QUANTITY,
    payload: {cart, value}
  };
};

export const removeCart = (product: any) => {
  return {
    type: TYPES.REMOVE_ITEM,
    payload: product,
  };
};
