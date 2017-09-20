import React from 'react'
import PropTypes from 'prop-types'

const ReceiptDetail  = ({ receiptDetailId, receiptDetailTotal }) => {
  const hasReceiptDetail = !(typeof receiptDetailId === 'undefined')
  const nodes = hasReceiptDetail ? (
      <div>
      <p>Total: &#36;{receiptDetailTotal}</p>
      </div>
  ) : (
      <em>There are currently no receipt deails.</em>
  )
  return (
    <div>{nodes}</div>
  )
}

ReceiptDetail.propTypes = {
  receiptDetailId: PropTypes.number,
  receiptDetailTotal: PropTypes.number,
}

export default ReceiptDetail
