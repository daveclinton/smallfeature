import * as React from "react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/layout";
import {
  IconButton,
  useColorMode,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Center,
  Link,
  Highlight,
} from "@chakra-ui/react";
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
        <Link
          textDecor="none"
          textStyle="h1"
          fontSize="29px"
          color="classicGreen"
          _hover={{ textDecor: "none" }}
          href="/"
        >
          <Highlight query={["DAVID"]} styles={{ color: "classicYellow" }}>
            ITS DAVID
          </Highlight>
        </Link>
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
