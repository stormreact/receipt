import { combineReducers } from 'redux'
import { getTotal } from './index.js'

import {
  CHECKOUT_SUCCESS,
  RECEIVE_RECEIPTS,
  GET_RECEIPT
} from '../constants/ActionTypes'

const receipts = (state, action) => {
  switch (action.type) {
    case GET_RECEIPT:
      return {
        ...state
      }

    default:
      return state
  }
}

const receiptDetail = (action) => {
  return {
    cart:action.state.cart,
    detail: {
      id: action.mycounter,
      timestamp : Date.now(),
      total: getTotal(action.state),
      user: "a@b.edu"
    }
 }
}

const byReceiptId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_RECEIPTS:
      return {
        ...state,
        ...action.receipts.reduce((obj, receipt) => {
          obj[receipt.detail.id] = receipt
          return obj
        }, {})
      }
    case CHECKOUT_SUCCESS:
      let mycounter = action.mycounter;
      let myreceipt = receiptDetail(action);
      return { ...state,
        [mycounter] : myreceipt
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

const visibleReceiptIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_RECEIPTS:
      return action.receipts.map(receipt => receipt.detail.id)
    case CHECKOUT_SUCCESS:
      let mycounter = action.mycounter;
      return [ ...state, mycounter ]
    default:
      return state
  }
}

export default combineReducers({
  byReceiptId,
  visibleReceiptIds
})

export const getReceipt = (state, id) =>
  state.byReceiptId[id]

export const getReceiptDetail = (state, id) =>
    state.byReceiptId[id].detail

export const getVisibleReceipts = state =>
    state.visibleReceiptIds.map(id => getReceipt(state, id))

export const getVisibleReceiptDetails = state =>
    state.visibleReceiptIds.map(id => getReceiptDetail(state, id))
