import * as React from "react";
import { Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useArticleBySlug } from "../query/posts";

const ArticlePost: React.FC = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const { data: article } = useArticleBySlug(slug);

  console.log("Here", article?.attributes?.title);
  return <Center>{article?.attributes?.title}</Center>;
};

export default ArticlePost;
