import { combineReducers } from 'redux';
import cart from './cart';
import products from "./products";
import discount from "./discount";

export default combineReducers({
  cart,
  products,
  discount
})