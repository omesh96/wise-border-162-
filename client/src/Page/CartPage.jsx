import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
    Box,
    Button,
    Divider,
    Heading,
    HStack,
    Image,
    Text,
    VStack,
    useToast
} from '@chakra-ui/react'
import {useDispatch, useSelector} from 'react-redux'
import { getCartProducts } from '../Redux/Cart/cart.action';
import CartProduct from '../Component/CartProduct';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {

  const dispatch = useDispatch();
  const cart = useSelector((store)=>store.cartManager.data);
  const orderTotal = useSelector(store=>store.cartManager.cartTotal);
  const navigate = useNavigate();
  const toast = useToast();
  useEffect(()=>{
    dispatch(getCartProducts());
  },[])


  const placeOrder = async () => {
    
    const todayDate = new Date();
    const orderDetails = {
      userId : "12wtgf34678321",
      placedOn : `${todayDate.getDate()}-${todayDate.getMonth()+1}${todayDate.getFullYear()} | ${todayDate.getHours()}:${todayDate.getMinutes()}:${todayDate.getSeconds()}`,
      products : cart,
      orderTotal : orderTotal,
      orderStatus : 'Placed'
    };
    console.log(orderDetails.placedOn)

    try{
      const res = await axios.post('http://localhost:8080/orders/placeOrder',{...orderDetails},)
      console.log(res.data);
      toast({
        title: 'Order has been placed',
        description: "Order has been placed nad will be confirmed shortly",
        status: 'success',
        position : "top-center",
        duration: 1000,
        isClosable: true,
    })
    setTimeout(()=>{
      navigate('/orders');
    },2000)
    }
    catch(err){
      console.log(err.message);
      toast({
        title: 'Order can not be placed',
        description: "Order has not been placed",
        status: 'error',
        position : "top-center",
        duration: 1000,
        isClosable: true,
      })
    }
    
  }


  return cart.length>0? (
    <Box w={{sm:'100%',md:'80%'}} padding={5} margin="auto">
        <Heading as="h2" size="lg" textAlign="left">Basket</Heading>
        <Divider />
        <Button variant="outline" colorScheme={'red'} onClick={placeOrder}>Place Order</Button>
        <Divider />
        {
          cart.map(el=>{
            return <CartProduct key={el['_id']} productDetails={el} handler={toast} />
          })
        }
        
        <Text>Order Total : Rs. {orderTotal}</Text>
        <Button size="lg" colorScheme='red' onClick={placeOrder}>Place Order</Button>
    </Box>
  ):(<>
    <Heading size="lg">Your Cart is empty!</Heading>
    <Button colorScheme="red" variant="solid" onClick={()=>navigate('/')}>Continue Shopping</Button>
    </>
  )
}


export default CartPage