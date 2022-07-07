import * as TYPES from '../../shared/constant/types';

export const getProducts = () => ({
  type: TYPES.GET_PRODUCTS
});

export const getProductsSuccess = (products: any) => ({
  type: TYPES.GET_PRODUCTS_SUCCESS,
  payload: products
});

export const getProductsError = (error: any) => ({
  type: TYPES.GET_PRODUCTS_FAILED,
  payload: error
});

export const getCategories = () => ({
  type: TYPES.GET_CATEGORIES,
});

export const getCategoriesSuccess = (products: any) => ({
  type: TYPES.GET_CATEGORIES_SUCCESS,
  payload: products,
});

export const getCategoriesError = (error: any) => ({
  type: TYPES.GET_CATEGORIES_ERROR,
  payload: error,
});
