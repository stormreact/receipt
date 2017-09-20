import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Flex, Box } from "grid-styled";
import TableReceipt from './TableReceipt';
import TableCartReceipt from './TableCartReceipt';
import ReceiptDetail from "../components/ReceiptDetail";
import { getReceiptDetailId, getReceiptDetailTotal } from "../reducers/receipts";

const ReceiptsContainer = ({ receiptDetailId, receiptDetailTotal }) =>
  <div>
    <h2>Receipts</h2>
    <Flex>
      <Box px={2}>
        <TableReceipt />
      </Box>
    </Flex>
    <h2>Receipt Detail</h2>
    <Flex>
      <Box px={2}>
        <ReceiptDetail
          receiptDetailId={receiptDetailId}
          receiptDetailTotal={receiptDetailTotal}
        />
      </Box>
    </Flex>
    <Flex>
      <Box px={2}>
        <TableCartReceipt />
      </Box>
    </Flex>
  </div>;

ReceiptsContainer.propTypes = {
  receiptDetailId: PropTypes.number,
  receiptDetailTotal: PropTypes.number
};

const mapStateToProps = state => ({
  receiptDetailId: getReceiptDetailId(state),
  receiptDetailTotal: getReceiptDetailTotal(state)
});

export default connect(
  mapStateToProps
)(ReceiptsContainer);
