import * as React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  Center,
  LinkBox,
  Text,
  Button,
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Skeleton,
  Divider,
  Tag,
  Flex,
  Avatar,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { usePaidArticles, usePosts, useProjects } from "../query/posts";
import { Link } from "react-router-dom";
import authorImage from "../assets/me.svg";
import { useNavigate } from "react-router-dom";

dayjs.extend(relativeTime);

const ArticleCard: React.FC = () => {
  const { isLoading: isLoadingPosts, data: postsData } = usePosts();
  const { isLoading: isLoadingPaidArticles, data: paidArticlesData } =
    usePaidArticles();
  const { isLoading: isLoadingProjects, data: projectsData } = useProjects();

  const navigate = useNavigate();

  const CircleIcon = (props: any) => (
    <Icon viewBox="0 0 200 200" {...props}>
      <path
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  );

  return (
    <Center display="flex" gap="10px" flexWrap="wrap" m="20px">
      <Tabs maxW="1240px" w="100%" isFitted variant="enclosed">
        <TabList
          display="flex"
          color="classicGreen"
          m="auto"
          w={{ md: "100%" }}
          mb="1em"
        >
          <Tab>Articles</Tab>
          <Tab>Projects</Tab>
          <Tab>Blog</Tab>
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
              {paidArticlesData?.map((post) => {
                return (
                  <Skeleton isLoaded={!isLoadingPaidArticles} key={post.id}>
                    <LinkBox
                      as={Link}
                      maxW={{ lg: "sm" }}
                      h={{ lg: "350px" }}
                      borderWidth="1px"
                      rounded="md"
                      display="flex"
                      flexDir="column"
                      to={post.attributes.articleLink}
                    >
                      <Box h="auto" p="20px">
                        <Text mt="15px" fontSize="1.4rem">
                          {post.attributes.articleTitle}
                        </Text>
                        <Tag m="10px"> {post.attributes.tag}</Tag>
                        <Text opacity="0.8" fontSize="1rem">
                          {post.attributes.description.slice(0, 180)}...
                          <ChakraLink
                            ml="3px"
                            color="classicGreen"
                            href={post.attributes.articleLink}
                          >
                            Read More
                          </ChakraLink>
                        </Text>
                      </Box>
                      <Divider maxW="90%" m="auto" />
                      <Flex m="5px 10px 10px 20px" alignItems="center">
                        <Text>
                          {dayjs(post.attributes.creationDate).fromNow()}
                        </Text>
                      </Flex>
                    </LinkBox>
                  </Skeleton>
                );
              })}
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
              {projectsData?.map((post) => {
                return (
                  <Skeleton isLoaded={!isLoadingProjects} key={post.id}>
                    <LinkBox
                      as={Link}
                      maxW={{ lg: "sm" }}
                      borderWidth="1px"
                      rounded="md"
                      display="flex"
                      flexDir="column"
                      to={post.attributes.projectLink}
                    >
                      <Box p="20px">
                        <Text mt="15px" fontSize="1.4rem">
                          {post.attributes.name}
                        </Text>
                        <Text mt="15px" fontSize="1rem">
                          {post.attributes.projectDescription}
                        </Text>
                      </Box>
                      <Button
                        bg="classicGreen"
                        _hover={{ bg: "classicGreen" }}
                        m="auto"
                        mb="1rem"
                        w="60%"
                        onClick={() => navigate(post.attributes.projectLink)}
                      >
                        Live Demo
                      </Button>
                      <Divider maxW="90%" m="auto" />
                      <Flex m="20px" alignItems="center">
                        <Text>
                          {dayjs(post.attributes.createdAt).fromNow()}
                        </Text>
                      </Flex>
                    </LinkBox>
                  </Skeleton>
                );
              })}
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
              {postsData?.map((post) => (
                <Skeleton isLoaded={!isLoadingPosts} fadeDuration={0.4}>
                  <LinkBox
                    key={post.id}
                    as={Link}
                    maxW={{ lg: "sm" }}
                    borderWidth="1px"
                    rounded="md"
                    display="flex"
                    flexDir="column"
                    to={`/article/${post.attributes.slug}`}
                  >
                    <Box p="20px">
                      <Text mt="15px" fontSize="1.4rem">
                        {post.attributes.title}
                      </Text>
                      <Tag mt="10px" mb="10px">
                        {post.attributes.topic}
                      </Tag>
                      <Text opacity="0.8" fontSize="1rem">
                        {post.attributes.subTitle.slice(0, 180)}...
                        <ChakraLink
                          color="classicYellow !important"
                          href={`/article/${post.attributes.slug}`}
                        >
                          Read More
                        </ChakraLink>
                      </Text>
                    </Box>
                    <Divider maxW="90%" m="auto" />
                    <Flex gap="10px" m="20px" alignItems="center">
                      <Flex gap="10px" alignItems="center">
                        <Avatar size="sm" src={authorImage} />
                        <Text>By David Clinton</Text>
                      </Flex>
                      <Flex gap="10px" alignItems="center">
                        <CircleIcon boxSize={3} />
                        <Text>
                          {dayjs(post.attributes.createdAt).fromNow()}
                        </Text>
                      </Flex>
                    </Flex>
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
