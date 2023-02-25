import React, { useState } from 'react'
import {
    Box, Heading, HStack, Text, VStack
} from '@chakra-ui/react'
import OrderSlab from '../Component/OrderSlab';

const OrderPage = () => {

    const [data,setData] = useState([{
        _id : "1",
        userId : "1232",
        placedOn : "26-12-24",
        products : ["Onion", "Snehil"],
        orderTotal  : 234,
        orderStatus : "Confirmed"
    }]);

  return (
    <Box w={{base: "98%",sm:"98%",md: "80%"}} margin="auto" padding="10px">
        <Text as="h6" fontSize="12px" color="grey" textAlign="left">HOME / MY ACCOUNT / SELF SERVICE</Text>
        <Heading size="lg" textAlign="left" marginTop="20px">My Orders</Heading>
        <VStack gap={"30px"} alignItems="flex-start">
        {
            data.map((el)=>{
                return <OrderSlab key={el['_id']} {...el}/>
            })
        }
        </VStack>

    </Box>
  )
}

export default OrderPage