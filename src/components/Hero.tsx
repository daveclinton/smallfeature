import * as React from "react";
import { Center, Heading, Text } from "@chakra-ui/react";

const Hero: React.FC = () => {
  return (
    <Center display="flex" flexDir="column">
      <Heading textAlign="center" textStyle="h1">
        Hey there, I'm David Clinton
      </Heading>
      <Text textAlign="center" textStyle="h3">
        Welcome to my digital garden where I share what I'm learning about
        shipping great products, becoming a better developer and growing a
        career in tech.
      </Text>
    </Center>
  );
};

export default Hero;
