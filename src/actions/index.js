import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

const receiveReceipts = receipts => ({
  type: types.RECEIVE_RECEIPTS,
  receipts: receipts
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

export const getAllReceipts = () => dispatch => {
  shop.getReceipts(receipts => {
    dispatch(receiveReceipts(receipts))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

const removeFromCartComplete = (productId,quantityById) => ({
  type: types.REMOVE_FROM_CART,
  productId,
  quantityById
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const removeFromCart = productId => (dispatch, getState) => {
  const quantityById = getState().cart.quantityById[productId]
  dispatch(removeFromCartComplete(productId,quantityById))
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}

export const getReceipts = () => {
  console.log("getReceipts was clicked");
}

export const receiptDetail = receiptId => (dispatch, getState) => {
/*
  const quantityById = getState().cart.quantityById[productId]
  dispatch(removeFromCartComplete(productId,quantityById))
*/
  console.log('receiptDetail was fired !');
}
