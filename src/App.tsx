// import { Button, useColorMode } from "@chakra-ui/react";

import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Flex, Text, Heading } from "@chakra-ui/layout";
import { IconButton, useColorMode } from "@chakra-ui/react";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex m="20px" align="center" justify="space-between">
        <Flex align="center" justify="space-between">
          <Flex
            borderRadius="10px"
            align="center"
            justify="center"
            h="30px"
            w="30px"
            bg={colorMode === "light" ? "classicYellow" : "light"}
            color={colorMode === "light" ? "light" : "dark"}
          >
            <Heading textAlign="center">D</Heading>
          </Flex>
          <Text ml="10px">David C</Text>
        </Flex>
        <Flex align="center">
          <IconButton
            variant="unstyled"
            aria-label=""
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
          />
          <HamburgerIcon />
        </Flex>
      </Flex>
    </>
  );
};

export default App;
