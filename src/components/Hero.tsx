import * as React from "react";
import { Center, Flex, Highlight, Text, Image } from "@chakra-ui/react";
import authorImage from "../assets/me.svg";
import Links from "./Links";

const Hero: React.FC = () => {
  return (
    <Center p={{ lg: "20px" }}>
      <Flex
        justify="space-between"
        mt="20px"
        mb="20px"
        maxW="1240px"
        display="flex"
        w="100%"
        flexDir={{ base: "column-reverse", lg: "row" }}
      >
        <Flex flexDir="column" m="auto" p="10px">
          <Text
            textAlign={{ base: "center", lg: "start" }}
            mb="1rem"
            textStyle="h1"
          >
            <Highlight
              query={["David Clinton"]}
              styles={{ color: "classicGreen" }}
            >
              Hey there, I'm David Clinton
            </Highlight>
          </Text>
          <Text
            textAlign={{ base: "center", lg: "start" }}
            mb="1rem"
            textStyle="h2"
          >
            Software and Web Developer | Frontend Developer | Technical Author
          </Text>
          <Text mb="1rem" textStyle="h3">
            Welcome to my digital garden where I write about many things,
            including, but not limited to React, Typescript, Javascript, Chakra
            UI, many more web dev related topics and Cloud Computing
          </Text>
          <Text mb="2rem" textStyle="h3">
            I've been programming for more than five (5) years and working
            professionally for three (3) as a frontend developer.
          </Text>
          <Links />
        </Flex>
        <Center>
          <Image
            src={authorImage}
            maxW="24rem"
            w={{ base: "50%", lg: "auto" }}
            m="auto"
          />
        </Center>
      </Flex>
    </Center>
  );
};

export default Hero;
