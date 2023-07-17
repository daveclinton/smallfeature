import * as React from "react";
import { Center, Flex, Highlight, Text } from "@chakra-ui/react";

const Hero: React.FC = () => {
  return (
    <Center>
      <Flex m="20px" maxW="1240px" display="flex" flexDir="column" w="100%">
        <Text textAlign="center" mb="1rem" textStyle="h1">
          <Highlight
            query={["David Clinton"]}
            styles={{ color: "classicGreen" }}
          >
            Hey there, I'm David Clinton
          </Highlight>
        </Text>
        <Text mb="1rem" textStyle="h2">
          Software and Web Developer | Frontend Developer
        </Text>
        <Text textAlign="center" textStyle="h3">
          Welcome to my digital garden where I share what I'm learning about
          shipping great products, becoming a better developer and growing a
          career in tech.
        </Text>
      </Flex>
    </Center>
  );
};

export default Hero;
