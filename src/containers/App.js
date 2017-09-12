import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import ReceiptsContainer from './ReceiptsContainer'
import { Flex, Box } from "grid-styled";

const App = () => (
  <div>
    <h2>Shopping Cart Example</h2>
    <hr/>
    <Flex>
      <Box px={2}>
        <ProductsContainer />
      </Box>
    </Flex>
    <hr/>
    <Flex>
      <Box px={2}>
        <CartContainer />
      </Box>
    </Flex>
    <Flex>
      <Box px={2}>
        <ReceiptsContainer />
      </Box>
    </Flex>
  </div>
)

export default App
