import { getData, storeData } from '../../shared/helpers/localStorage';
import * as TYPES from '../../shared/constant/types';

const initialState = {
  data: getData('cart', [])
};

const cartReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  const cart = [...state.data];
  switch (type) {
    case TYPES.ADD_CART: {
      const index: any = cart.findIndex(
        (item: any) => item.id === payload.id
      );
      if (index < 0) {
        return {
          ...state,
          data: [...state.data, ...[{ ...payload, qty: 1 }]],
        };
      } else {
        cart[index].qty += 1;
      }
      return {
        ...state,
        data: cart,
      };
    }

    case TYPES.HANDLE_QUANTITY: {
      const index: any = cart.findIndex(
        (item: any) => item.id === payload.cart.id
      );
      cart[index].qty += payload.value;
      if (cart[index].qty === 0) {
        cart.splice(index, 1);
      }
      return {
        ...state,
        data: cart,
      };
    }

    case TYPES.REMOVE_ITEM: {
      const index: any = cart.findIndex(
        (item: any) => item.id === action.payload.id
      );
      cart.splice(index, 1);
      return {
        ...state,
        data: cart,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
