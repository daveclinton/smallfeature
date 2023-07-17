import * as React from "react";
import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
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

const ArticleCard: React.FC = () => {
  const { isLoading: isLoadingPosts, data: postsData } = usePosts();
  const { isLoading: isLoadingPaidArticles, data: paidArticlesData } =
    usePaidArticles();
  const { isLoading: isLoadingProjects, data: projectsData } = useProjects();

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
      <Tabs isFitted variant="enclosed">
        <TabList
          display="flex"
          color="classicGreen"
          m="auto"
          w={{ md: "500px" }}
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
                    <Image
                      objectFit="cover"
                      src={post.attributes.cover.data.attributes.url}
                      alt="Dan Abramov"
                      maxH="150px"
                    />
                    <Box p="20px">
                      <Text mt="15px" fontSize="1.4rem">
                        {post.attributes.title}
                      </Text>
                      <Tag mt="10px" mb="10px">
                        Sample Tag
                      </Tag>
                      <Text opacity="0.8" fontSize="1rem">
                        {post.attributes.subTitle.slice(0, 80)}...
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
          <TabPanel
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="10px"
            flexWrap="wrap"
          >
            <>
              {projectsData?.map((post) => {
                dayjs.extend(relativeTime);
                const createdAtDate = new Date(post.attributes.createdAt);
                const formattedCreationDate = dayjs(createdAtDate).fromNow();
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
                      <Image
                        objectFit="cover"
                        src={post.attributes.projectImage.data.attributes.url}
                        alt="Dan Abramov"
                        maxH="160px"
                      />
                      <Box p="20px">
                        <Text mt="15px" fontSize="1.4rem">
                          {post.attributes.name}
                        </Text>
                        <Text mt="15px" fontSize="1.4rem">
                          {post.attributes.projectDescription}
                        </Text>
                      </Box>
                      <Divider maxW="90%" m="auto" />
                      <Flex m="20px" alignItems="center">
                        <Text>{formattedCreationDate}</Text>
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
              {paidArticlesData?.map((post) => {
                dayjs.extend(relativeTime);
                const creationDate = new Date(post.attributes.creationDate);
                const formattedCreationDate = dayjs(creationDate).fromNow();
                return (
                  <Skeleton isLoaded={!isLoadingPaidArticles} key={post.id}>
                    <LinkBox
                      as={Link}
                      maxW={{ lg: "sm" }}
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
                          {post.attributes.description}
                        </Text>
                      </Box>
                      <Divider maxW="90%" m="auto" />
                      <Flex m="5px 10px 10px 20px" alignItems="center">
                        <Text>{formattedCreationDate}</Text>
                      </Flex>
                    </LinkBox>
                  </Skeleton>
                );
              })}
            </>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Center>
  );
};

export default ArticleCard;
