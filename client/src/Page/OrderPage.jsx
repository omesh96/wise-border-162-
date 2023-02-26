import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
    Box, Heading, HStack, Text, VStack
} from '@chakra-ui/react'
import OrderSlab from '../Component/OrderSlab';

const OrderPage = () => {

    const [data,setData] = useState([]);

    useEffect(()=>{
      getOrders();
    },[])

    const getOrders = async ()=>{
      try{
        const res = await axios.get('http://localhost:8080/orders');
        setData(res.data);
      }
      catch(err)
      {
        console.log(err);
      }
    }

  return (
    <Box w={{base: "98%",sm:"98%",md: "80%"}} margin="10px auto" padding="10px" >
        <Text as="h6" fontSize="12px" color="grey" textAlign="left">HOME / MY ACCOUNT / SELF SERVICE</Text>
        <Heading size="lg" textAlign="left" marginTop="20px">My Orders</Heading>
        <VStack gap={"30px"} alignItems="center">
        {
            data.reverse().map((el)=>{
                return <OrderSlab key={el['_id']} {...el}/>
            })
        }
        </VStack>

    </Box>
  )
}

export default OrderPage