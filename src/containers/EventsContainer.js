import React from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "grid-styled";
import Receipt from "../components/Receipt";
import { getReceipts } from "../actions";

const EventsContainer = ({getReceipt}) =>
  <div>
    <h2>Test Events</h2>
    <Flex>
      <Box px={2}>
        <Receipt
          onGetReceiptsClicked={() => getReceipts()}
        />
      </Box>
    </Flex>
  </div>;

EventsContainer.propTypes = {
  onGetReceiptsClicked: PropTypes.func
}

export default EventsContainer;
