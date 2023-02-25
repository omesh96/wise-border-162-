import React from 'react'
import Sidebar from "../Sidebar";
import styles from "../Product/Product.module.css";
import { Box, Text ,Flex, Button ,useToast } from '@chakra-ui/react';
import { GiSevenPointedStar } from 'react-icons/gi';
import { RiTruckFill } from 'react-icons/ri';


const Sigleproduct = () => {
    const toast = useToast();
  return (
    <div className={styles.main_container}>
    {/* <Navbar /> */}
    <div className={styles.filter_container}>
      <div className={styles.filter_component}>
        <Sidebar />
      </div>
      <div className={styles.Sigleproduct}>
        <div className={styles.Siglepro_div_img}>
            <img src="https://www.bigbasket.com/media/uploads/p/l/292149_8-nescafe-sunrise-instant-coffee-chicory-mix.jpg" alt=""/>
        </div>

        <div className={styles.Siglepro_div2}>
            <div className={styles.compony}>
           Nescafe
            </div>

            <Text marginTop={2}>Nescafe Sunrise Instant Coffee - Chicory Mix, Rich In Aroma & Flavour, 100 g Pouch</Text>
             
             <Text color={"gray.600"} marginTop={2} fontSize={12}>MRP:Rs 205</Text>

             <Text fontSize={15} marginTop={1} > <b>Price:Rs 186</b>(Rs.1.86/g)</Text>
              <Text marginTop={1} fontSize={13} color={"red.400"}>You Save:19</Text>
              <Text marginTop={1} color={"gray.600"}fontSize={11}>(Inclusive of all taxes)</Text>

    
               <Flex marginTop={2}>
              <Flex
              align="center"
              bg="rgb(227, 235, 218)"
              justify="space-around"
              px="5px"
              py="2px"
              maxWidth="fit-content"
              mr="5px"
            >
              <Text
                fontSize="11px"
                fontFamily=""
                color="#689f38"
                textAlign={"left"}
                fontWeight="400"
              >
               4.3
              </Text>
              <Box pl="4px">
                <GiSevenPointedStar color="#689f38" fontSize="10px" />
              </Box>
      </Flex>
            <Text  fontSize={14}  >1139 Ratings & 29 Reviews</Text>
            </Flex>



  <Flex marginTop={4} gap={5}>
    <Button>1</Button>
    <Button colorScheme={"pink"}
     onClick={() => {
        toast({
          title: "Added to cart SuccessFully",
          description: `${"Item Added"}`,
          position: "top-center",
          status: "success",
          duration: 1000,
          isClosable: true,
        });
      }}
    >ADD TO BASCKET</Button>
    <Button>SAVE</Button>
  </Flex>

  <Flex marginTop={5} pr="5px">
                <Box mr="5px" _hover={{ color: "#79933b" }}>
                  <RiTruckFill color="#888" fontSize="20px" />
                </Box>
                <Text
                  fontSize={14}
                  marginLeft={3}
                  color="gray"
                  fontWeight="400"
                >
                Standard: Today 8:00AM - 10:00AM
                </Text>
              </Flex>

              <Text marginTop={4} fontSize={14}>Pack Sizes</Text>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Sigleproduct