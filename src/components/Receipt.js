import React from 'react'
import PropTypes from 'prop-types'

const Receipt = ({ onGetReceiptsClicked }) => {
  const nodes = (
  <div>
    <button onClick={onGetReceiptsClicked}>
      GetReceipts
    </button>
  </div>
  )
  return (
    <div>{nodes}</div>
  )
}

Receipt.propTypes = {
  onGetReceiptsClicked: PropTypes.func
}

export default Receipt
