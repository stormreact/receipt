
import {
  CHECKOUT_SUCCESS,
  RECEIVE_RECEIPTS
} from '../constants/ActionTypes'

const initialState = {}

/*
const initialState = {
  addedCarts: [],
  receiptDetail: {}
}
*/

const addedCarts = (state = initialState.addedCarts, action) => {
  switch (action.type) {
    case CHECKOUT_SUCCESS:
      console.log("Got a new cart !");
      return [ ...state, action.cart ]

    default:
      return state
  }
}

const receiptDetail = () => {
  return { number: 1, user: "a@b.edu", total: 31.55, timestamp: Date.now()}
}

export const getAllCarts = state => state.addedCarts

//const receiptCounter = () => (receiptCounter() || 0) + 1

/*
class A {
    constructor(){
        this.id = ++A.counter;
        console.log(this.id)
    }

    getCounter = () => {return(this.id))
}
A.counter = 0;
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
      console.log("Got a new cart !");
      return { ...state,
        [counter.next().value] : receiptDetail()
      }
    default:
      return {...state}
  }
}



/*
const receipts = (state = initialState, action) => {
  //console.log(counter.next().value)
  return {
    ...state,
    [counter.next().value] : receiptDetail()
  }
}
*/

/*
const receipts = (state = initialState, action) => {
  return {
    addedCarts: addedCarts(state.addedCarts, action),
    receiptDetail : receiptDetail()
  }
}
*/

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

export default receipts
