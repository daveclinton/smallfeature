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

const ArticleCard: React.FC = () => {
  const { isLoading, data } = usePosts();
  return (
    <Center display="flex" gap="10px" flexWrap="wrap" m="20px">
      {isLoading ? (
        <Flex mt="50px" justify="center" align="center" flexDir="column">
          <CircularProgress value={80} />
          <Heading>Fetching articles</Heading>
        </Flex>
      ) : (
        <>
          {data?.map((post) => (
            <LinkBox
              key={post.id}
              as="article"
              maxW="sm"
              borderWidth="1px"
              rounded="md"
              display="flex"
              flexDir="column"
            >
              <Image
                objectFit="cover"
                src="https://itsfoss.com/content/images/size/w600/format/webp/2023/07/birthday-wish-linux-terminal.png"
                alt="Dan Abramov"
              />
              <Box p="20px">
                <Text h="80px" mt="15px" fontSize="1.4rem">
                  {post.attributes.title}
                </Text>
                <Text h="80px" opacity="0.8" fontSize="1rem">
                  Make the special occasion for your loved ones even more
                  special by creating an ASCII birthday animation in the Linux
                  terminal.
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
