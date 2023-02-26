import {
  Box,
  Flex,
  Text,
  useBreakpointValue,
  Stack,
  Button,
  Collapse,
  IconButton,
  useColorModeValue,
  useDisclosure,
  Img,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import logo from "./logo.jpg";
import { GrBasket } from "react-icons/gr";
import { useNavigate } from "react-router";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const navigate=useNavigate()
  
  return (
    <Box>
      <Flex
        width={"80%"}
        margin="auto"
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            {/* Logo */}
            <Img
              width={["16", "16", "16"]}
              borderRadius="1rem"
              src={logo}
              alt="BigBlow"
            />
          </Text>

          <Flex 
             display={{ base: "none", md: "flex" }}
             ml={10}
             >
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
          mr={"6rem"}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
           onClick={()=>navigate("/userlogin")}
          >
            Login
          </Button>
          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"pink.400"}
           onClick={()=>navigate("/userregister")}
            _hover={{
              bg: "pink.300",
            }}
          >
            Sign Up
          </Button>
        </Stack>
        <Flex
          bg={"lightgrey"}
          gap="0.5rem"
          justify={"flex-start"}
          align="center"
          height={"60px"}
          borderRadius="2px"        
          width="116px"
          padding={"5px"}
          style={{cursor:"pointer"}}
          onClick={()=>navigate("/cart")}
        //   border={"2px solid green"}
        >
        <GrBasket size={"30px"} />
         My Basket
         0 items          
        </Flex>  
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
