import { Flex, HStack, VStack,Image,Text, Button, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { increaseProductCount, removeProductCart } from '../Redux/Cart/cart.action';
import { useDispatch } from 'react-redux';
const CartProduct = (props) => {
    const {productDetails} = props;
    const [qty, setQty] = useState(productDetails['productCount']);
    const dispatch = useDispatch();
    
    const incrementClick = ()=>{
        if(qty<5)
        {
            setQty(qty+1);
            increaseProductCount();
        }
    }
    const decrementClick= ()=>{
        if(qty>1)
            setQty(qty-1);
    }


  return (
    <Flex justifyContent='space-between' alignItems="center">
        <Flex justifyContent="start" gap="30px" alignItems="center">
            <Image src={productDetails.images} alt="NONE" height="120px" />
            <VStack alignItems="start">
                <Text fontSize="sm" textAlign="left" fontWeight={"bold"}>{productDetails.brand} {productDetails.name}</Text>
                <Text fontSize="sm" textAlign="left" >Qty : {qty}</Text>
            </VStack>
        </Flex>
        <HStack gap={0}>
            <Button  size="sm" onClick={()=>dispatch(decrementClick(productDetails['_id']))}>-</Button>
            <Button disabled size="sm">{qty}</Button>
            <Button  size="sm" onClick={()=>dispatch(incrementClick(productDetails['_id']))}>+</Button>
            <Button size="sm" colorScheme="red" onClick={()=>{
                dispatch(removeProductCart(productDetails))
            props.handler({
                title: 'Product Removed',
                description: "Product has been removed!",
                status: 'success',
                duration: 1000,
                position : 'top-center',
                isClosable: true,
            })}}>Remove</Button>
        </HStack>
        <Text fontSize="sm" fontWeight="bold" color="gray">Rs.{(productDetails.price-(productDetails.price*productDetails.discount/100)).toFixed(2)} x {qty} = {((productDetails.price-(productDetails.price*productDetails.discount/100.0))*qty).toFixed(2)}</Text>
    </Flex>
  )
}

export default CartProduct