import { combineReducers } from "redux";
import cart, * as fromCart from "./cart";
//import { cartReceipts } from './receipts'
import products, * as fromProducts from "./products";
import receipts from "./receipts";

export default combineReducers({
  cart,
  products,
  receipts
});

const getAddedIds = state => fromCart.getAddedIds(state.cart);
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id);
const getProduct = (state, id) => fromProducts.getProduct(state.products, id);

export const getTotal = state =>
  getAddedIds(state)
    .reduce(
      (total, id) =>
        total + getProduct(state, id).price * getQuantity(state, id),
      0
    )
    .toFixed(2);

export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id)
  }));
