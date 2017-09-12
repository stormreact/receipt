import React from "react";
/*
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { receiptDetail } from "../actions";
import { getReceipts } from "../reducers";
*/

import { Flex, Box } from "grid-styled";
import TableReceipt from './TableReceipt';

const ReceiptsContainer = () =>
  <div>
    <h2>Receipts</h2>
    <Flex>
      <Box px={2}>
        <TableReceipt />
      </Box>
    </Flex>
  </div>;

export default ReceiptsContainer;
