import * as React from "react";
import {
  Center,
  LinkBox,
  Text,
  Image,
  Flex,
  CircularProgress,
  Heading,
  Box,
} from "@chakra-ui/react";
import { usePosts } from "../query/posts";
import { Link } from "react-router-dom";

const ArticleCard: React.FC = () => {
  const { isLoading, data } = usePosts();
  return (
    <Center display="flex" gap="10px" flexWrap="wrap" m="20px">
      {isLoading ? (
        <Flex mt="50px" justify="center" align="center" flexDir="column">
          <CircularProgress isIndeterminate />
          <Heading>Fetching articles</Heading>
        </Flex>
      ) : (
        <>
          {data?.map((post) => (
            <LinkBox
              key={post.id}
              as={Link}
              maxW="sm"
              borderWidth="1px"
              rounded="md"
              display="flex"
              flexDir="column"
              to={`/article/${post.attributes.slug}`}
            >
              <Image
                objectFit="cover"
                src={post.attributes.cover.data.attributes.url}
                alt="Dan Abramov"
              />
              <Box p="20px">
                <Text h="80px" mt="15px" fontSize="1.4rem">
                  {post.attributes.title}
                </Text>
                <Text h="80px" opacity="0.8" fontSize="1rem">
                  {post.attributes.subTitle}
                </Text>
              </Box>
            </LinkBox>
          ))}
        </>
      )}
    </Center>
  );
};

export default ArticleCard;
