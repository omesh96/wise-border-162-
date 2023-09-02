import { Input, InputGroup, InputRightAddon, Stack, useColorModeValue } from '@chakra-ui/react';
import { CiSearch } from 'react-icons/ci';
import { MobileNavItem, NAV_ITEMS } from './MobileNavItem';
const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >

      
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};
export { MobileNav } 
