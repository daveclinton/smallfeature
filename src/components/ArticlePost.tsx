import * as React from "react";
import {
  Button,
  Center,
  CircularProgress,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useArticleBySlug } from "../query/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowBackIcon } from "@chakra-ui/icons";

const ArticlePost: React.FC = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const { isLoading, data: article, error } = useArticleBySlug(slug);

  const navigate = useNavigate();

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
    <Center m="20px" flexDir="column">
      <Button
        leftIcon={<ArrowBackIcon />}
        onClick={() => navigate("/")}
        variant="outline"
        mb="10px"
        alignSelf="start"
      >
        Back
      </Button>
      <Text mb="20px" fontSize="30px" textStyle="h1">
        {article?.attributes.title}
      </Text>
      <Text as="i" mb="20px" textStyle="h3">
        {article?.attributes.subTitle}
      </Text>
      <Image
        src={article?.attributes?.cover?.data?.attributes?.url}
        alt="Dan Abramov"
        aspectRatio="auto"
        maxW={{ lg: "50%" }}
        mb="30px"
      />
      <Flex
        sx={{
          flexDirection: "column",
          maxWidth: "1240px",
          margin: "auto",
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
          "& p": { fontSize: "1.1rem", fontWeight: 400, marginBottom: "5px" },
          "& img": {
            width: "100%",
            height: "auto",
            margin: "20px auto 20px auto",
          },
        }}
      >
        <ReactMarkdown children={articleContent} remarkPlugins={[remarkGfm]} />
      </Flex>
    </Center>
  );
};

export default ArticlePost;
