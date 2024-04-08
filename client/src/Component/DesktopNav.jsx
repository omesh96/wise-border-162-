import { Box, Flex, Input, InputGroup, InputLeftAddon, InputRightAddon } from "@chakra-ui/react";
import { DesktopSubNav } from "./DesktopSubNav";
import { NAV_ITEMS } from "./MobileNavItem";
import { CiSearch } from "react-icons/ci";

const DesktopNav = () => {

  return (
    <Flex align={"center"}>
      {/* Search bar */}

      <InputGroup size="sm" ml={"4rem"}
        width={"600px"}
      >


        <Input placeholder="Search for Products.." />
        <InputRightAddon bg="#84c225" color={"white"} children={<CiSearch size={"24px"}/>} />
      </InputGroup>

      {/* Search bar */}
    </Flex>
  )
};
export { DesktopNav };
