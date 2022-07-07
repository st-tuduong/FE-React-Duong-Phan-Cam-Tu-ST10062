import { combineReducers } from "redux";
import cartReducer from "../app/pages/cart/cart.reducers";
import { homeCategoriesReducer, homeReducer } from "./pages/home/home.reducers";

const appReducer = combineReducers({
  cart: cartReducer,
  home: homeReducer,
  categories: homeCategoriesReducer
});

export default appReducer;
