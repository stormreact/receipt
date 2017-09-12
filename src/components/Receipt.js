import React from 'react'
import PropTypes from 'prop-types'

const Receipt  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
      <div>
      <p>Total: &#36;{total}</p>
      <button onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
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
