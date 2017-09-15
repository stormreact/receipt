import { combineReducers } from 'redux'

/*
import {
  CHECKOUT_SUCCESS
} from '../constants/ActionTypes'
*/

import {
  CHECKOUT_SUCCESS,
  RECEIVE_RECEIPTS
} from '../constants/ActionTypes'

const initialState = {}

const receiptDetail = (action,id) => {
  return {
    cart:action.cart,
    detail: {
      id: id,
      timestamp : 111,  // Date.now()
      total: 31.55,
      user: "a@b.edu"
    }
 }
}

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
*/

function *Counter() {
	let count = 0;
	while(true) {
		yield count++;
	}
}

const counter = Counter();

export const cartReceipts = (state = initialState.addedCarts, action) => {
  switch (action.type) {
    case CHECKOUT_SUCCESS:
      let mycounter = counter.next().value;
      let myreceipt = receiptDetail(action,mycounter);
      return { ...state,
        [mycounter] : myreceipt
      }
    default:
      return {...state}
  }
}

const byReceiptId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_RECEIPTS:
      console.log("byReceiptId case that is not yet implemented");

    default:
      //console.log("action = ", action);
      const { receiptId } = action
      if (receiptId) {
        console.log("Got Receipt ID ", receiptId);
        return {
          ...state,
          [receiptId]: state[receiptId]
        }
      }
      return state
  }
}

/*
const receiptIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_RECEIPTS:
      return action.receipts.map(receipt => receipt.id)
    default:
      return state
  }
}
*/

export default combineReducers({
  byReceiptId,
  //receiptIds,
  //checkoutReceipt
})

export const getReceipt = (state, id) =>
  state.byReceiptId[id]

export const getReceipts = () => {
  // state.receiptIds.map(id => getReceipt(state, id))
  return {
  id: 0,
  timestamp: 1505173544745,
  total: 31.55,
  user: "a@b.edu"
  }
}

// export default receipts
