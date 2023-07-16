import { useQuery } from "react-query";
import axios from "axios";

interface Post {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    article: string;
    subTitle: string;
    slug: string;
    cover: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string;
          caption: null | string;
          url: string;
          previewUrl: null | string;
          createdAt: string;
          updatedAt: string;
        };
      };
    };
  };
}

interface PaidArticles {
  id: number;
  attributes: {
    articleTitle: string;
    description: string;
    creationDate: string;
    articleLink: string;
    tag: string;
  };
}
interface Projects {
  id: number;
  attributes: {
    name: string;
    projectLink: string;
    creationDate: string;
    tag: string;
    projectDescription: string;
    projectImage: { data: { id: number; attributes: { url: string } } };
  };
}

export const usePosts = () => {
  return useQuery<Post[]>("posts", async () => {
    const response = await axios.get<{ data: Post[] }>(
      "https://blog-backend-m44q.onrender.com/api/posts?populate=*"
    );
    return response.data.data;
  });
};

export const useArticleBySlug = (slug: string) => {
  return useQuery<Post | undefined>(["posts", slug], async () => {
    const response = await axios.get<{ data: Post[] }>(
      `https://blog-backend-m44q.onrender.com/api/posts?filters[Slug][$eq]=${slug}&populate=*`
    );
    const matchingPost = response.data.data.find(
      (post) => post.attributes.slug === slug
    );
    return matchingPost || undefined;
  });
};

export const usePaidArticles = () => {
  return useQuery<PaidArticles[]>("paid-articles", async () => {
    const response = await axios.get<{ data: PaidArticles[] }>(
      "https://blog-backend-m44q.onrender.com/api/paid-articles"
    );
    return response.data.data;
  });
};

export const useProjects = () => {
  return useQuery<Projects[]>("projects", async () => {
    const response = await axios.get<{ data: Projects[] }>(
      "https://blog-backend-m44q.onrender.com/api/projects?populate=*"
    );
    return response.data.data;
  });
};
