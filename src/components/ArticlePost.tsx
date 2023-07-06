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
    <Center
      sx={{
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "1240px",
        margin: "auto",
        padding: "20px",
        "& h1": {
          fontSize: "1.5rem",
          lineHeight: 1.3,
          fontWeight: 700,
          marginBottom: "20px",
      },
        "& h2": {
          fontSize: "1.4rem",
          lineHeight: 1.3,
          fontWeight: 400,
          marginBottom: "10px",
        },
        "& p": { fontSize: "1rem", fontWeight: 400, marginBottom: "5px" },
        "& img": {
          width: "100%",
          height: "auto",
          margin: "20px auto 20px auto",
        },
      }}
    >
      <ReactMarkdown children={articleContent} remarkPlugins={[remarkGfm]} />
    </Center>
  );
};

export default ArticlePost;
