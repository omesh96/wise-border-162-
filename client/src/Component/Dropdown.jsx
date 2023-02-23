import { useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Text, SimpleGrid } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <Flex ml={"10rem"} border="1px solid lightgrey" width={"79%"} display={{base:"none",sm:"none",md:"none",lg:"none", xl:"none", "2xl":"flex"}} >
    
    <Menu isOpen={isOpen}>

      <MenuButton onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} bg="#84c225"  padding={"3px 3px"} textAlign="left" color="white" width={"18%"}>
          SHOP BY CATEGORY
          <ChevronDownIcon ml={"3rem"}/>
      </MenuButton>
      
      
      <MenuList onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" width={"1210px"}>

        <SimpleGrid columns={3} >
        <Box border="1px solid lightgrey" width={"300px"}>
        <MenuItem _hover={{fontWeight:"bold"}}>Fruits & Vegetables</MenuItem>
        <MenuItem _hover={{fontWeight:"bold"}}>Foodgrains, Oil & Masala</MenuItem>
        <MenuItem _hover={{fontWeight:"bold"}}>Bakery, Cakes & Dairy</MenuItem>
        <MenuItem _hover={{fontWeight:"bold"}}>Beverages</MenuItem>
        <MenuItem _hover={{fontWeight:"bold"}}>Snacks & Branded Foods</MenuItem>
        <MenuItem _hover={{fontWeight:"bold"}}>Beuty & Hygiene</MenuItem>
        <MenuItem _hover={{fontWeight:"bold"}}>Cleaning & Household</MenuItem>
        <MenuItem _hover={{fontWeight:"bold"}}>Kitchen, Garden & Pets</MenuItem>
        <MenuItem _hover={{fontWeight:"bold"}}>Eggs, Meats & Fish</MenuItem>
        <MenuItem _hover={{fontWeight:"bold"}}>Gourmet & World Food</MenuItem>
        <MenuItem _hover={{fontWeight:"bold"}}>Baby Care</MenuItem>
        <MenuItem _hover={{fontWeight:"bold"}}>View All</MenuItem>
        </Box>

        <Box width={"300px"} border="1px solid lightgrey" ml={"-100px"}>
        <MenuItem _hover={{fontWeight:"bold"}}>Fruits & Vegetables</MenuItem>
        <MenuItem _hover={{fontWeight:"bold"}}>Herbs & Seasonings</MenuItem>
        <MenuItem _hover={{fontWeight:"bold"}}>Organic Fruits & Vegetables</MenuItem>
        <MenuItem _hover={{fontWeight:"bold"}}>Cuts & Sprouts</MenuItem>
        <MenuItem _hover={{fontWeight:"bold"}}>Exotic Fruits & Veggies</MenuItem>
        <MenuItem _hover={{fontWeight:"bold"}}>Beuty & Hygiene</MenuItem>
        <MenuItem _hover={{fontWeight:"bold"}}>Flower Bouquets, Bunches</MenuItem>
        </Box>
        
        <Box border="1px solid lightgrey" width={"300px"} ml={"-200px"}>
        <MenuItem _hover={{fontWeight:"bold"}}>Potato, Onion & Tomato</MenuItem>
        <MenuItem _hover={{fontWeight:"bold"}}>Cucumber & Capsicum</MenuItem>
        <MenuItem _hover={{fontWeight:"bold"}}>Leafy Vegetables</MenuItem>
        <MenuItem _hover={{fontWeight:"bold"}}>Beans, Brinjals & Okra</MenuItem>
        <MenuItem _hover={{fontWeight:"bold"}}>Cabbage & Cauliflower</MenuItem>
        <MenuItem _hover={{fontWeight:"bold"}}>Gourd, Pumpkin, Drumstick</MenuItem>
        <MenuItem _hover={{fontWeight:"bold"}}>Specialty</MenuItem>
        </Box>
        </SimpleGrid>
      </MenuList>

    </Menu>
      

    
      </Flex>
  );
}


