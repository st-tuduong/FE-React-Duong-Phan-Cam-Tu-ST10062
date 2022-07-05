import { combineReducers } from 'redux';
import productReducer from '../pages/home/home.reducers';

const appReducer = combineReducers({
  products: productReducer
})

export default appReducer;