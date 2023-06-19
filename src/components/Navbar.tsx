import * as React from "react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/layout";
import {
  IconButton,
  useColorMode,
  Image,
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import Logo from "../assets/david.svg";

const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      m={{ base: "20px", lg: "20px 180px 0px 180px" }}
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
        <IconButton
          variant="unstyled"
          onClick={onOpen}
          aria-label=""
          icon={<HamburgerIcon color="classicGreen" boxSize="30px" />}
        />
        <Drawer onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Flex>
  );
};

export default Navbar;
