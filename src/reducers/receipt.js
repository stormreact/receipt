
import {
  CHECKOUT_SUCCESS
} from '../constants/ActionTypes'

const initialState = {
  addedCarts: []
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

export const getAllCarts = state => state.addedCarts

const receipt = (state = initialState, action) => {
  return {
    addedCarts: addedCarts(state.addedCarts, action)
  }
}

export default receipt
