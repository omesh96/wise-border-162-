import { Box, Flex, Heading, HStack, Image, Tag, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const OrderSlab = (props) => {


  return (
    <Box w="100%" margin={"10px auto"} padding={4} boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px">
        <Text textAlign="left" color="gray.400" fontWeight="bold" fontSize="lg">Order Id : #<Text as="span" fontSize="lg" fontWeight="bold" color="green">{props['_id']}</Text></Text>
        <Text textAlign="left" color="blue.400" fontWeight="bold" size="md">Order Placed on  : {props.placedOn}</Text>
        {
            props.products.map((el,i)=>{
                return (
                    <Flex justifyContent='space-between' alignItems="center">
                        <Flex justifyContent="start" gap="30px" alignItems="center">
                            <Image src={el.images} alt="NONE" height="120px" />
                            <VStack alignItems="start">
                                <Text fontSize="sm" textAlign="left" fontWeight={"bold"}>{el.brand} {el.name}</Text>
                                <Text fontSize="sm" textAlign="left" >Qty : {el.productCount}</Text>
                            </VStack>
                        </Flex>
                        <Text fontSize="sm" fontWeight="bold" color="gray">Rs.{(el.price-(el.price*el.discount/100)).toFixed(2)} x {el.productCount} = {((el.price-(el.price*el.discount/100.0))*el.productCount).toFixed(2)}</Text>
                    </Flex>
                )
            })
        }
        <Text size="md" fontWeight="bold" color="green.400" textAlign="left">Order Total : Rs. {props.orderTotal}</Text>
        <HStack alignItems="center">
            <Text color="black" fontWeight="bold" fontSize="lg">Order Status : </Text>
            <Tag colorScheme={"green"}>{props.orderStatus}</Tag>

        </HStack>
        
    </Box>
  )
}

export default OrderSlab