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
  Tag,
  Flex,
  Avatar,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { usePaidArticles, usePosts, useProjects } from "../query/posts";
import { Link } from "react-router-dom";

dayjs.extend(relativeTime);

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
                <Skeleton isLoaded={!isLoadingPosts}>
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
                      <Tag mt="10px">Sample Tag</Tag>
                      <Text opacity="0.8" fontSize="1rem">
                        {post.attributes.subTitle}
                      </Text>
                    </Box>
                    <Flex gap="10px" m="20px" alignItems="center">
                      <Flex gap="10px" alignItems="center">
                        <Avatar size="sm" />
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
              {projectsData?.map((post) => (
                <Skeleton isLoaded={!isLoadingProjects}>
                  <LinkBox
                    key={post.id}
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
              {paidArticlesData?.map((post) => (
                <Skeleton isLoaded={!isLoadingPaidArticles}>
                  <LinkBox
                    key={post.id}
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
                      <Tag mb="10px"> {post.attributes.tag}</Tag>
                      <Text opacity="0.8" fontSize="1rem">
                        {post.attributes.description}
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
