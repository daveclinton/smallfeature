import { Flex, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";

function index() {
  return (
    <Flex
      bg="black"
      h="80px"
      justifyContent="center"
      alignItems="center"
      fontSize="1.2rem"
      pos="sticky"
      top={0}
      zIndex={20}
      flexGrow={1}
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        w="100%"
        h="80px"
        maxW="1500px"
      >
        <Link
          color="white"
          alignItems="center"
          ml="20px"
          cursor="pointer"
          textDecoration="none"
          fontSize="2rem"
          flexGrow={1}
        >
          David
        </Link>
        <UnorderedList
          display="flex"
          listStyleType="none"
          textAlign="center"
          mr="2rem"
        >
          <ListItem lineHeight="40px" mr="1rem">
            <Link
              color="#fff"
              textDecoration="none"
              p="0.5rem 1rem"
              h="100%"
              borderBottom="3px solid transparent"
            >
              Home
            </Link>
          </ListItem>
          <ListItem lineHeight="40px" mr="1rem">
            <Link
              color="#fff"
              textDecoration="none"
              p="0.5rem 1rem"
              h="100%"
              borderBottom="3px solid transparent"
            >
              About
            </Link>
          </ListItem>
          <ListItem lineHeight="40px" mr="1rem">
            <Link
              color="#fff"
              textDecoration="none"
              p="0.5rem 1rem"
              h="100%"
              borderBottom="3px solid transparent"
            >
              Blog
            </Link>
          </ListItem>
          <ListItem lineHeight="40px" mr="1rem">
            <Link
              color="#fff"
              textDecoration="none"
              p="0.5rem 1rem"
              h="100%"
              borderBottom="3px solid transparent"
            >
              Contact Me
            </Link>
          </ListItem>
        </UnorderedList>
      </Flex>
    </Flex>
  );
}

export default index;
