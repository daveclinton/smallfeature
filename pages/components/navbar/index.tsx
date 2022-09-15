import React, { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Flex,
  Link,
  Box,
  ListItem,
  UnorderedList,
  Text,
} from "@chakra-ui/react";

function navbar() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

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
        ml={{ base: "40px" }}
      >
        <Avatar
          size={"md"}
          src={
            "https://media-exp1.licdn.com/dms/image/C4D03AQG9IJYGoKhsyw/profile-displayphoto-shrink_200_200/0/1663189874953?e=1668643200&v=beta&t=QeHOlNlsgJ6VfZ7OHlw2Xk8BdfIF07TyTQ9dWD5zzRs"
          }
        />
        <Link
          color="white"
          alignItems="center"
          ml="20px"
          cursor="pointer"
          textDecoration="none"
          fontSize="2rem"
          flexGrow={1}
          _hover={{ textDecoration: "none" }}
        >
          Dave
        </Link>
        <UnorderedList
          display={{ base: "none", lg: "flex" }}
          listStyleType="none"
          textAlign="center"
          mr="2rem"
        >
          <ListItem
            lineHeight="40px"
            mr="1rem"
            _after={{
              display: "block",
              h: "3px",
              w: "0",
              bg: "transparent",
              transition: "width 0.7s ease, background-color 0.5s ease",
            }}
            _hover={{ borderBottom: "3px solid #fff", textDecoration: "none" }}
          >
            <Link
              color="#fff"
              textDecoration="none"
              p="0.5rem 1rem"
              h="100%"
              borderBottom="3px solid transparent"
              _hover={{ textDecoration: "none" }}
            >
              Home
            </Link>
          </ListItem>
          <ListItem
            lineHeight="40px"
            mr="1rem"
            _after={{
              display: "block",
              h: "3px",
              w: "0",
              bg: "transparent",
              transition: "width 0.7s ease, background-color 0.5s ease",
            }}
            _hover={{ borderBottom: "3px solid #fff", textDecoration: "none" }}
          >
            <Link
              color="#fff"
              textDecoration="none"
              p="0.5rem 1rem"
              h="100%"
              borderBottom="3px solid transparent"
              _hover={{ textDecoration: "none" }}
            >
              About
            </Link>
          </ListItem>
          <ListItem
            lineHeight="40px"
            mr="1rem"
            _after={{
              display: "block",
              h: "3px",
              w: "0",
              bg: "transparent",
              transition: "width 0.7s ease, background-color 0.5s ease",
            }}
            _hover={{ borderBottom: "3px solid #fff", textDecoration: "none" }}
          >
            <Link
              color="#fff"
              textDecoration="none"
              p="0.5rem 1rem"
              h="100%"
              borderBottom="3px solid transparent"
              _hover={{ textDecoration: "none" }}
            >
              Blog
            </Link>
          </ListItem>
          <ListItem
            lineHeight="40px"
            mr="1rem"
            _after={{
              display: "block",
              h: "3px",
              w: "0",
              bg: "transparent",
              transition: "width 0.7s ease, background-color 0.5s ease",
            }}
            _hover={{ borderBottom: "3px solid #fff", textDecoration: "none" }}
          >
            <Link
              color="#fff"
              textDecoration="none"
              p="0.5rem 1rem"
              h="100%"
              borderBottom="3px solid transparent"
              _hover={{ textDecoration: "none" }}
            >
              Contact Me
            </Link>
          </ListItem>
        </UnorderedList>
        <Box>
          <HamburgerIcon
            color="white"
            // display={{ base: "block", lg: "none" }}
            mr="40px"
            boxSize="50px"
            cursor="pointer"
            onClick={handleToggle}
          >
            {navbarOpen ? <Text>Utatii</Text> : <></>}
          </HamburgerIcon>
        </Box>
      </Flex>
    </Flex>
  );
}

export default navbar;
