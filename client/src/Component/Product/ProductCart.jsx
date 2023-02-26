import {
  Box,
  Flex,
  Grid,
  Image,
  Text,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { RiTruckFill } from "react-icons/ri";
import { IoMdCart } from "react-icons/io";
import React from "react";
import styles from "../Product/Product.module.css";
import { GiNurseMale, GiSevenPointedStar } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { addNewProductCart } from "../../Redux/Cart/cart.action";




const ProductCart = ({ data }) => {
  const { isLoading } = useSelector((store) => store);
  const dispatch=useDispatch()

  

  const {
    brand,
    category,
    description,
    discount,
    images,
    name,
    price,
    ratings,
    reviews,
    id,
  } = data;

  const toast = useToast();



 


     

  const handleClick=()=>{
    for(let key in data){
    console.log( "key" , data[key])
    }          
  }



  if (isLoading) {
    return (
      <div className={styles.loader}>
        {" "}
        <img
          src="https://www.bbassets.com/static/v2639/custPage/build/content/img/bb-loader.gif"
          alt="loading"
        />{" "}
      </div>
    );
    // <div className={styles.loader}></div>;
  } else {
    return (
      <>
        <Box onClick={()=>handleClick()} className={styles.cartbox}>
          <Flex className={styles.discount}>
            <Text fontSize={11} marginLeft={"58%"} textAlign={"right"}>
              {discount}
            </Text>
            <Box className={styles.discount_star}>
              <GiSevenPointedStar color="#ba5253" fontSize="10px" />
            </Box>
          </Flex>

          <Box className={styles.imgbox}>
            <img src={images} alt="" />
          </Box>

          <Box className={styles.discription}>
            <Text textAlign={"left"} fontSize={11} color={"gray.600"}>
              {brand}
            </Text>
            <Text textAlign={"left"} fontSize={14}>
              {name}
            </Text>

            <Flex
              align="center"
              bg="rgb(227, 235, 218)"
              justify="space-around"
              px="5px"
              py="2px"
              maxWidth="fit-content"
              mr="7px"
            >
              <Text
                fontSize="11px"
                fontFamily=""
                color="#689f38"
                textAlign={"left"}
                fontWeight="400"
              >
                {ratings}
              </Text>
              <Box pl="5px">
                <GiSevenPointedStar color="#689f38" fontSize="10px" />
              </Box>
            </Flex>

            <Flex px="10px" h="22px" border="1px solid #ccc" my="10px">
              <Text
                fontSize="12px"
                fontFamily=""
                color="#666"
                textAlign={"left"}
                fontWeight="500"
                mr="5px"
              >
                {"4kg"}
              </Text>
              <Text
                fontSize="12px"
                fontFamily=""
                color="#666"
                textAlign={"left"}
                fontWeight="500"
              >
                {ratings}
              </Text>
            </Flex>

            <Box py="5px" px="5px">
              <Flex align={"center"}>
                <Text
                  fontSize="11px"
                  fontFamily=""
                  color="#666"
                  textAlign={"left"}
                  fontWeight="400"
                  mr="5px"
                >
                  MRP{" "}
                  <span style={{ textDecoration: "line-through" }}>
                    Rs {price}
                  </span>
                </Text>
                <Text
                  fontSize="14px"
                  fontFamily=""
                  color="#231f20"
                  textAlign={"left"}
                  fontWeight="400"
                >
                  Rs-{discount}
                </Text>
              </Flex>
              <Flex pr="5px">
                <Box mr="5px" _hover={{ color: "#79933b" }}>
                  <RiTruckFill color="#888" fontSize="18px" />
                </Box>
                <Text
                  fontSize="10px"
                  fontFamily=""
                  color="#333"
                  textAlign={"left"}
                  fontWeight="400"
                >
                  {ratings}
                </Text>
              </Flex>
              <Flex alignItems={"center"} mb="1px">
                <InputGroup borderColor="#ccc" size="xs">
                  <InputLeftAddon
                    children="Qty"
                    color="#999"
                    fontSize="12px"
                    bg="#eee"
                  />
                  <Input
                    border={"1px solid green"}
                    width={90}
                    type="number"
                    color="#333"
                    fontSize="14px"
                    bg="#fff"
                  />
                </InputGroup>

                <Button
                  // className={styles.addbtn}
                  colorScheme={"pink"}
                  rightIcon={<IoMdCart fontSize="15px" />}
                  fontSize="14px"
                  color="white"
                  variant="solid"
                  onClick={() => {
                   dispatch(addNewProductCart(data))
                    toast({
                      title: "Added to cart SuccessFully",
                      description: `${description}`,
                      position: "top-center",
                      status: "success",
                      duration: 1000,
                      isClosable: true,
                    });
                  }}
                >
                  Add
                </Button>
              </Flex>
            </Box>
          </Box>
        </Box>
      </>
    );
  }
};

// {
//   "_id": "63f5050d360b304bb7e8052e",
//   "category": "Fruits & Vegetables",
//   "brand": "Fresho",
//   "name": "Fresho Strawberry(200g)",
//   "pe": 75.66,
//   "diricscount": 24,
//   "description": "Extremely juicy and syrupy, these conical heart shaped fruits have seeds on the skin that give them a unique texture. With a blend of sweet-tart flavour, these are everyone's favourite berries.",
//   "images": "https://www.bigbasket.com/media/uploads/p/l/10000263_12-fresho-strawberry.jpg",
//   "ratings": 543,
//   "reviews": 123,
//   "available": true
// }

export default ProductCart;
