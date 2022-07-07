import * as TYPES from '../../shared/constant/types';

interface IInitialStateHome {
  data: [];
  error: string;
  isLoading: boolean;
}

interface IInitialStateCategory {
  categories: [];
  error: string;
  isLoading: boolean;
}

export const initialState: IInitialStateHome = {
  data: [],
  error: '',
  isLoading: true,
};

export const IInitialStateCategory: IInitialStateCategory = {
  categories: [],
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
        error: '',
        isLoading: false
      }
    }

    case TYPES.GET_PRODUCTS_FAILED: {
      return {
        ...state,
        data: '',
        error: action.payload,
        isLoading: false
      }
    }

    default:
      return state;
  }
};

export const homeCategoriesReducer = (
  state = initialState,
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
        categories: action.payload,
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