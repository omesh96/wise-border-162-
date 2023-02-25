import React, { useEffect, useState } from 'react'
import {
    Box,
    Divider,
    Heading
} from '@chakra-ui/react'

const CartPage = () => {

const [cart,setCart] = useState([]);

  return (
    <Box>
        <Heading as="h2" size="lg">Basket</Heading>
        <Divider />

    </Box>
  )
}


export default CartPage