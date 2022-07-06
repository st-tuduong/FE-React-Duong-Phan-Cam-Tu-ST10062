import * as TYPES from '../../shared/constant/types';
export const addCart = (cart: any) => {  
  return {
    type: TYPES.ADD_CART,
    payload: cart,
  };
};

export const decreaseCart = (quantity: any) => {
  return {
    type: TYPES.DECREASE_QUANTITY,
    payload: quantity,
  };
};

export const removeCart = (quantity: any) => {
  return {
    type: TYPES.REMOVE_ITEM,
    payload: quantity,
  };
};
