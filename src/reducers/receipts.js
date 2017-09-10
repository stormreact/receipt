
import {
  CHECKOUT_SUCCESS
} from '../constants/ActionTypes'

/*
import {
  CHECKOUT_SUCCESS,
  RECEIVE_RECEIPTS
} from '../constants/ActionTypes'
*/

const initialState = {}

const receiptDetail = (action) => {
  return {
    cart:action.cart,
    timestamp : Date.now(),
    total: 31.55,
    user: "a@b.edu"
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

const receipts = (state = initialState.addedCarts, action) => {
  switch (action.type) {
    case CHECKOUT_SUCCESS:
      return { ...state,
        [counter.next().value] :
          receiptDetail(action)
      }
    default:
      return {...state}
  }
}

/*
const byReceiptId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_RECEIPTS:
      return {
        ...state,
        ...action.receipts.reduce((obj, receipt) => {
          obj[receipt.id] = receipt
          return obj
        }, {})
      }
    default:
      const { receiptId } = action
      if (receiptId) {
        return {
          ...state,
          [receiptId]: receipts(state[receiptId], action)
        }
      }
      return state
  }
}

export const getReceipt = (state, id) =>
  state.byReceiptId[id]
*/

export default receipts
