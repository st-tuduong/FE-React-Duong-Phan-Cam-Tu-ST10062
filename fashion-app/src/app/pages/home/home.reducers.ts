import * as TYPES from "../types";

const initialState = {
  carts: [],
};

const homeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TYPES.ADD_CART:
      const newCart = [...state.carts];
      const productItem: any = newCart.find(
        (item: any) => item.id === action.payload.product.id
      );
      if (productItem) {
        productItem.qty += 1;
        return {
          ...state,
          carts: newCart,
        };
      }
      return {
        ...state,
        carts: [...state.carts, { ...action.payload.product, qty: 1 }],
      };

    case TYPES.DECREASE_QUANTITY:
      const newQuantity = [...state.carts];
      const cartItem: any = newQuantity.find(
        (item: any) => item.id === action.payload.product.id
      );
      if (cartItem) {
        cartItem.qty -= 1;
        return {
          ...state,
          carts: newQuantity,
        };
      }
      return {
        ...state,
        carts: [...state.carts, { ...action.payload.product, qty: 1 }],
      };

    default:
      return state;
  }
};

export default homeReducer;
