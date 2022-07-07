import axios from 'axios';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import * as TYPES from '../../shared/constant/types';

export const getPosts = () => async (dispatch: Dispatch<AnyAction>) => {
  try {
    dispatch({ type: TYPES.GET_PRODUCTS });
    const res = await axios.get(
      'https://6088e20da6f4a300174271e7.mockapi.io/products'
    );
    dispatch({
      type: TYPES.GET_PRODUCTS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: TYPES.GET_PRODUCTS_FAILED,
      payload: error,
    });
  }
};
