import { Box, Heading, HStack, Tag, Text } from '@chakra-ui/react'
import React from 'react'

const OrderSlab = (props) => {


  return (
    <Box w="90%" margin={"10px auto"} padding={4} border="1px solid red">
        <Text textAlign="left" color="grey" fontSize="lg">Order Id : <Text as="span" fontSize="lg" color="green.500">{props['_id']}</Text></Text>
        <Text textAlign="left">Order Placed on  : {props.placedOn}</Text>
        {
            props.products.map((el,i)=>{
                return (
                    <Text key={i+1}>{el}</Text>
                )
            })
        }
        <Text textAlign="left">Order Total : Rs. {props.orderTotal}</Text>
        <HStack alignItems="center">
            <Text >Order Status : </Text>
            <Tag colorScheme={"green"}>{props.orderStatus}</Tag>

        </HStack>
        
    </Box>
  )
}

export default OrderSlab