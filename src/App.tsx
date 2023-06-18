// import { Button, useColorMode } from "@chakra-ui/react";

import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/layout";
import { Avatar, IconButton, useColorMode } from "@chakra-ui/react";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex m="20px" align="center" justify="space-between">
        <Flex align="center" justify="space-between">
          <Avatar mr="15px" name="David Clinton" />
          <Text>David C</Text>
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
