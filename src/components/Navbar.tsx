import * as React from "react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/layout";
import { IconButton, useColorMode, Image } from "@chakra-ui/react";
import Logo from "../assets/david.svg";

const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      m={{ base: "20px", lg: "20px 180px 0px 180px" }}
      align="center"
      justify="space-between"
    >
      <Image src={Logo} h="30px" />
      <Flex align="center">
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
        <HamburgerIcon color="classicGreen" boxSize="30px" />
      </Flex>
    </Flex>
  );
};

export default Navbar;
