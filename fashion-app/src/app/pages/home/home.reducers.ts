import { getData, storeData } from '../../shared/helpers/localStorage';
import * as TYPES from '../../shared/constant/types';

const initialState = {
  carts: getData('cart', []),
};

const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TYPES.ADD_CART: {
      const newCart = [...state.carts];
      const productItem: any = newCart.find(
        (item: any) => item.id === action.payload.products.id
      );
      if (productItem) {
        productItem.qty += 1;
        storeData("cart", newCart);
        return {
          ...state,
          carts: newCart,
        };
      } else {
        return {
          ...state,
          carts: [...state.carts, { ...action.payload.products, qty: 1 }],
        };
      }
    }

    case TYPES.DECREASE_QUANTITY: {
      const newCart = [...state.carts];
      const productItem: any = newCart.find(
        (item: any) => item.id === action.payload.products.id
      );
      productItem.qty -= 1;
      if (productItem.qty === 0) {
        newCart.splice(productItem, 1);
      }
      storeData("cart", newCart);
      return {
        ...state,
        carts: newCart,
      };
    }

    case TYPES.REMOVE_ITEM: {
      const newCart = [...state.carts];
      const productItem: any = newCart.find(
        (item: any) => item.id === action.payload.products.id
      );
      newCart.splice(productItem, 1);
      storeData("cart", newCart);
      return {
        ...state,
        carts: newCart,
      };
    }

    default:
      return state;
  }
};

export default productReducer;
