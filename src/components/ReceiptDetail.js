import React from 'react'
import PropTypes from 'prop-types'

const ReceiptDetail  = ({ id, total }) => {
  const hasReceiptDetail = !(typeof id === 'undefined')
  const nodes = hasReceiptDetail ? (
      <div>
      <p>Total: &#36;{total}</p>
      </div>
  ) : (
      <em>There are currently no receipt deails.</em>
  )
  return (
    <div>{nodes}</div>
  )
}

ReceiptDetail.propTypes = {
  id: PropTypes.number,
  total: PropTypes.number,
}

export default ReceiptDetail
