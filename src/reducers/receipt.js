
import {
  CHECKOUT_SUCCESS
} from '../constants/ActionTypes'

const initialState = {
  addedCarts: [],
  receiptDetail: {}
}

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

const receipt = (state = initialState, action) => {
  return {
    addedCarts: addedCarts(state.addedCarts, action),
    receiptDetail : receiptDetail()
  }
}

export default receipt
