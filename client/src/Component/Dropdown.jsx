import { useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Flex, Spacer, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Flex ml={"10rem"} border="1px solid lightgrey" width={"80%"} display={{base:"none",sm:"none",md:"none",lg:"flex"}} >
    <Menu isOpen={isOpen}>
      <MenuButton onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} bg="#84c225"  padding={"5px 5px"} textAlign="left" color="white" width={"18%"}>
          SHOP BY CATEGORY
          <ChevronDownIcon ml={"3rem"}/>
      </MenuButton>
      
      <MenuList onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} border="2px solid red" width={"500px"}>
        
        <Menu isOpen={isOpened}>
        <MenuButton onMouseEnter={() => setIsOpened(true)} onMouseLeave={() => setIsOpened(false)}>
        <MenuItem _hover={{fontWeight:"bold"}}><Text mr={"20rem"} border={"2px solid teal"}>Fruits & Vegitables</Text></MenuItem>
        </MenuButton>
            <MenuList onMouseEnter={() => setIsOpened(true)} onMouseLeave={() => setIsOpened(false)}>
              <MenuItem>Hello</MenuItem>
            </MenuList>
        </Menu>
        
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
      </MenuList>
      </Menu>
      </Flex>
  );
}


