import * as TYPES from '../../shared/constant/types';

interface IInitialStateHome {
  data: [];
  error: string;
  isLoading: boolean;
};

interface IInitialStateCategory {
  dataCategory: [];
  error: string;
  isLoading: boolean;
};

export const initialState: IInitialStateHome = {
  data: [],
  error: '',
  isLoading: true,
};

export const initialStateCategory: IInitialStateCategory = {
  dataCategory: [],
  error: '',
  isLoading: true,
};


export const productReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case TYPES.GET_PRODUCTS: {
      return {
        ...state,
        isLoading: true
      }
    };

    case TYPES.GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        error: '',
        isLoading: false
      }
    };

    default:
      return state;
  };
};

export const categoryReducer = (
  state = initialStateCategory,
  action: any
) => {
  switch (action.type) {
    case TYPES.GET_CATEGORIES:
      return {
        ...state,
        isLoading: true,
      };

    case TYPES.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        dataCategory: action.payload,
        isLoading: false,
        error: '',
      };

    case TYPES.GET_CATEGORIES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
