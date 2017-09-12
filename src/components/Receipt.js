import React from 'react'
import PropTypes from 'prop-types'

const Receipt  = ({ products, total, onCheckoutClicked }) => {
  const hasReceipts = products.length > 0
  const nodes = hasReceipts ? (
      <div>
      <p>Total: &#36;{total}</p>
      <button onClick={onCheckoutClicked}
        disabled={hasReceipts ? '' : 'disabled'}>
        Checkout
      </button>
      </div>
  ) : (
      <em>You do not have any receipts.</em>
  )
  return (
    <div>{nodes}</div>
  )
}

Receipt.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Receipt
