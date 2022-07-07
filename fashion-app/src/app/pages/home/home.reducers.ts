import * as TYPES from '../../shared/constant/types';
import { IProduct } from '../../shared/interfaces/product';

interface IInitialState {
  data: IProduct[];
  error: string;
  isLoading: boolean;
}

export const initialState: IInitialState = {
  data: [],
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

    case TYPES.GET_PRODUCTS_FAILED: {
      return {
        ...state,
        data: '',
        error: action.payload.error,
        isLoading: false
      }
    }

    default:
      return state;
  }
  
};
