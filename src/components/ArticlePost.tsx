import * as React from "react";
import { Box, Center, CircularProgress, Flex, Heading } from "@chakra-ui/react";
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
    <Flex
      sx={{
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        maxWidth: "1240px",
        margin: "auto",
        padding: "20px",
        "& h1": {
          fontSize: "1.5rem",
          lineHeight: 1.3,
          fontWeight: 700,
        },
        "& h2": {
          fontSize: "1.4rem",
          lineHeight: 1.3,
          fontWeight: 400,
        },
        "& p": { fontSize: "1rem", fontWeight: 400 },
      }}
    >
      <ReactMarkdown children={articleContent} remarkPlugins={[remarkGfm]} />
    </Flex>
  );
};

export default ArticlePost;
