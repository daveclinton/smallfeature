import * as React from "react";
import { Center, CircularProgress, Flex, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useArticleBySlug } from "../query/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ArticlePost: React.FC = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const { isLoading, data: article, error } = useArticleBySlug(slug);

  if (isLoading) {
    return (
      <Center>
        <Flex mt="50px" justify="center" align="center" flexDir="column">
          <CircularProgress isIndeterminate />
          <Heading>Fetching the post</Heading>
        </Flex>
      </Center>
    );
  }

  if (error) {
    return <Center>Error loading article.</Center>;
  }

  const articleContent = article?.attributes.article || "";

  return (
    <Center maxW="1020px" m="30px">
      <Flex flexDir="column">
        <ReactMarkdown children={articleContent} remarkPlugins={[remarkGfm]} />
      </Flex>
    </Center>
  );
};

export default ArticlePost;
