import { combineReducers } from "redux";
import cartReducer from "../app/pages/cart/cart.reducers";
import { categoryReducer, productReducer } from "./pages/home/home.reducers";

const appReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
  categories: categoryReducer
});

export default appReducer;
