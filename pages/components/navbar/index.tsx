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
        <UnorderedList>
          <ListItem>
            <Link>Home</Link>
          </ListItem>
          <ListItem>
            <Link>About</Link>
          </ListItem>
          <ListItem>
            <Link>Blog</Link>
          </ListItem>
          <ListItem>
            <Link>Contact Me</Link>
          </ListItem>
        </UnorderedList>
      </Flex>
    </Flex>
  );
}

export default index;
