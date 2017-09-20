import { combineReducers } from "redux";
import { getTotal } from "./index.js";

import * as fromCart from "./cart";
import * as fromProducts from "./products";

import {
  CHECKOUT_SUCCESS,
  RECEIVE_RECEIPTS,
  RECEIPT_DETAIL
} from "../constants/ActionTypes";

const receiptDetail = action => {
  return {
    cart: action.state.cart,
    detail: {
      id: action.mycounter,
      timestamp: Date.now(),
      total: getTotal(action.state),
      user: "a@b.edu"
    }
  };
};

const byReceiptId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_RECEIPTS:
      return {
        ...state,
        ...action.receipts.reduce((obj, receipt) => {
          obj[receipt.detail.id] = receipt;
          return obj;
        }, {})
      };
    case CHECKOUT_SUCCESS:
      let mycounter = action.mycounter;
      let myreceipt = receiptDetail(action);
      return {
        ...state,
        [mycounter]: myreceipt
      };
    default:
      return state;
  }
};

const visibleReceiptIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_RECEIPTS:
      return action.receipts.map(receipt => receipt.detail.id);
    case CHECKOUT_SUCCESS:
      let mycounter = action.mycounter;
      return [...state, mycounter];
    default:
      return state;
  }
};

const receiptDetailIds = (state = [], action) => {
  if (!action) {
    return state;
  }

  switch (action.type) {
    case RECEIPT_DETAIL:
      let id = action.receiptId;
      return [id];
    default:
      return state;
  }
};

export default combineReducers({
  byReceiptId,
  visibleReceiptIds,
  receiptDetailIds
});

export const getReceipt = (state, id) => state.byReceiptId[id];

export const getReceiptDetail = (state, id) => state.byReceiptId[id].detail;

export const getReceiptDetailId = state => {
  if (state.receipts.receiptDetailIds.length === 0) {
    return undefined;
  }

  const id = state.receipts.receiptDetailIds[0];
  return id;
};

export const getReceiptDetailTotal = state => {
  let total = 0.0;
  if (getReceiptDetailId(state) === undefined) {
    return total;
  }

  const id = getReceiptDetailId(state);
  total = state.receipts.byReceiptId[id].detail.total;
  return total;
};

export const getVisibleReceipts = state =>
  state.visibleReceiptIds.map(id => getReceipt(state, id));

export const getVisibleReceiptDetails = state =>
  state.visibleReceiptIds.map(id => getReceiptDetail(state, id));

const getQuantity = (state, id) => fromCart.getQuantity(state, id);
const getProduct = (state, id) => fromProducts.getProduct(state.products, id);

export const getCartProductsFromReceipt = state => {
  const receiptId = state.receipts.receiptDetailIds[0];

  if (!state.receipts.byReceiptId[receiptId]) {
    return state;
  }

  const cart = state.receipts.byReceiptId[receiptId].cart;

  const rows = cart.addedIds.map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(cart, id)
  }));

  /*
  This is what the returned data structure looks like.
  Leave this here for awhile, and if folks do not find
  this helpful then I will remove later, let me know...

  const testrows = [
  {
    id: 100,
    title: 'Shoes',
    price: 40.11,
    quantity: 3
  },
  {
    id: 101,
    title: 'Boots',
    price: 71.11,
    quantity: 2
  }
  ];
  */
  return rows;
};
