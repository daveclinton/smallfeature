import * as React from "react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/layout";
import {
  IconButton,
  useColorMode,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Center,
} from "@chakra-ui/react";
import Logo from "../assets/david.svg";

const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center>
      <Flex
        w="100%"
        m="20px"
        maxW="1240px"
        align="center"
        justify="space-between"
      >
        <Image src={Logo} h="30px" />
        <Flex gap="20px" align="center">
          <IconButton
            variant="unstyled"
            aria-label=""
            onClick={toggleColorMode}
            icon={
              colorMode === "light" ? (
                <MoonIcon boxSize="20px" />
              ) : (
                <SunIcon boxSize="20px" />
              )
            }
          />
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon color="classicGreen" boxSize="30px" />}
              variant="unstyled"
            />
            <MenuList>
              <MenuItem>Home</MenuItem>
              <MenuItem>Projects</MenuItem>
              <MenuItem>Blog</MenuItem>
              <MenuItem>Paid Articles</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Center>
  );
};

export default Navbar;
