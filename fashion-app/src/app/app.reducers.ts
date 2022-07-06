import { combineReducers } from "redux";
import cartReducer from "../app/pages/cart/cart.reducers";

const appReducer = combineReducers({
  cart: cartReducer,
});

export default appReducer;
