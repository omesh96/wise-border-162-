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
    VStack
} from '@chakra-ui/react'
import {useDispatch, useSelector} from 'react-redux'
import { getCartProducts } from '../Redux/Cart/cart.action';
import CartProduct from '../Component/CartProduct';

const CartPage = () => {

  const dispatch = useDispatch();
  const cart = useSelector((store)=>store.cartManager.data);
  const orderTotal = useSelector(store=>store.cartManager.cartTotal);
  const [data,setData] = useState([{
    "_id": "63f50413360b304bb7e8052a",
    "category": "Fruits & Vegetables",
    "brand": "Fresho",
    "name": "Carrot",
    "price": 12.17,
    "discount": 5,
    "description": "A popular sweet-tasting root vegetable, Carrots are narrow and cone shaped.\nThey have thick, fleshy, deeply colored root, which grows underground, and feathery green leaves that emerge above the ground.",
    "images": "https://www.bigbasket.com/media/uploads/p/l/10000071_14-fresho-carrot-orange.jpg",
    "ratings": 234,
    "reviews": 4,
    "available": true,
    "productCount" : 3
  }]);

  useEffect(()=>{
    dispatch(getCartProducts);
  },[])


  const placeOrder = async () => {
    const todayDate = new Date();
    const orderDetails = {
      userId : "12wtgf34678321",
      placedOn : `${todayDate.getDate()}-${todayDate.getMonth()+1}${todayDate.getFullYear()} | ${todayDate.getHours()}:${todayDate.getMinutes()}:${todayDate.getSeconds()}`,
      products : data,
      orderTotal : orderTotal,
      orderStatus : 'Placed'
    };
    console.log(orderDetails.placedOn)

    try{
      const res = await axios.post('http://localhost:8080/orders/placeOrder',{...orderDetails},)
      console.log(res.data);
    }
    catch(err){
      console.log(err.message);
    }
    
  }


  return (
    <Box w={{sm:'100%',md:'80%'}} padding={5} margin="auto">
        <Heading as="h2" size="lg" textAlign="left">Basket</Heading>
        <Divider />
        {
          data.map(el=>{
            return <CartProduct key={el['_id']} productDetails={el} />
          })
        }
        <Button variant="outline" colorScheme={'red'} onClick={placeOrder}>Place Order</Button>
        <Text>Order Total : Rs. {orderTotal}</Text>
        <Button size="lg" colorScheme='red'>Place Order</Button>
    </Box>
  )
}

export default CartPage