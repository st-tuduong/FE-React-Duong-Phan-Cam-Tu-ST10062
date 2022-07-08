import { put, all, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { getCategoriesError, getCategoriesSuccess, getProductsError, getProductsSuccess } from './home.actions';
import * as TYPES from '../../shared/constant/types';
import { environment } from '../../config/environment';
import { ENDPOINT } from '../../config/endpoint';

export function* getProducts() {
  try {
    const res: AxiosResponse<any> = yield axios.get(`${environment.apiBaseUrl}/${ENDPOINT.products.index}`);
    yield put(getProductsSuccess(res.data));
  } catch (error) {
    yield put(getProductsError(error));
  }
};

export function* getCategories() {
  try {
    const res: AxiosResponse<any> = yield axios.get(`${environment.apiBaseUrl}/categories`);
    yield put(getCategoriesSuccess(res.data));
  } catch (error) {
    yield put(getCategoriesError(error));
  }
};

export function* watchProducts() {
  yield all([
    takeLatest(TYPES.GET_PRODUCTS, getProducts),
    takeLatest(TYPES.GET_CATEGORIES, getCategories)
  ])
};
