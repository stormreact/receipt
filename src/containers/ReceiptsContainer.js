import React from "react";
import { Flex, Box } from "grid-styled";
import TableReceipt from './TableReceipt';
import TableCartReceipt from './TableCartReceipt';

const ReceiptsContainer = () =>
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
        <TableCartReceipt />
      </Box>
    </Flex>
  </div>;

export default ReceiptsContainer;
