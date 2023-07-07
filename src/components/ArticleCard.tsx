import * as React from "react";
import {
  Center,
  LinkBox,
  Text,
  Image,
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Skeleton,
} from "@chakra-ui/react";
import { usePosts } from "../query/posts";
import { Link } from "react-router-dom";

const ArticleCard: React.FC = () => {
  const { isLoading, data } = usePosts();
  return (
    <Center display="flex" gap="10px" flexWrap="wrap" m="20px">
      <Tabs isFitted variant="enclosed">
        <TabList
          display="flex"
          color="classicGreen"
          m="auto"
          maxW="500px"
          mb="1em"
        >
          <Tab>Blog</Tab>
          <Tab>Projects</Tab>
          <Tab>Paid Articles</Tab>
        </TabList>
        <TabPanels>
          <TabPanel
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="10px"
            flexWrap="wrap"
          >
            <>
              {data?.map((post) => (
                <Skeleton isLoaded={!isLoading}>
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
                </Skeleton>
              ))}
            </>
          </TabPanel>
          <TabPanel
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="10px"
            flexWrap="wrap"
          >
            <>
              {data?.map((post) => (
                <Skeleton isLoaded={!isLoading}>
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
                </Skeleton>
              ))}
            </>
          </TabPanel>
          <TabPanel
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="10px"
            flexWrap="wrap"
          >
            <>
              {data?.map((post) => (
                <Skeleton isLoaded={!isLoading}>
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
                </Skeleton>
              ))}
            </>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Center>
  );
};

export default ArticleCard;
