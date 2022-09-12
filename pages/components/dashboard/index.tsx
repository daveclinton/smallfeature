import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

function Index() {
  return (
    <Flex justifyContent="center">
      <Box boxSize="sm">
        <Heading>Hello World</Heading>
      </Box>
      <Box>
        <Heading>Hello World</Heading>
      </Box>
    </Flex>
  );
}

export default Index;
