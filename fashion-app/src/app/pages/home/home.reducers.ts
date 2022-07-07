import * as TYPES from '../../shared/constant/types';
import { IProduct } from '../../shared/interfaces/product';

interface IInitialState {
  data: IProduct[];
  category: string[];
  error: string;
  isLoading: boolean;
}

export const initialState: IInitialState = {
  data: [],
  category: [],
  error: '',
  isLoading: true,
};

export const homeReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case TYPES.GET_PRODUCTS: {
      return {
        ...state,
        isLoading: true
      }
    }

    case TYPES.GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        error: null,
        isLoading: false
      }
    }

    case TYPES.GET_CATEGORIES: {
      const categoryIndex = state.category.findIndex((category: any) => category === action.payload)
      if(categoryIndex < -1) {
        [...state.category].splice(categoryIndex, 1);
      }else {
        state.category.push(action.payload);
      }
      return {
        ...state,
        category: [...state.category]
      }
    }

    default:
      return state;
  }
  
};
