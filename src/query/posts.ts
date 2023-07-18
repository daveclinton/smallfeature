import { useQuery } from "react-query";
import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

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
    createdAt: string;
    creationDate: string;
    tag: string;
    projectDescription: string;
    projectImage: { data: { id: number; attributes: { url: string } } };
  };
}

export const usePosts = () => {
  return useQuery<Post[]>("posts", async () => {
    const response = await axios.get<{ data: Post[] }>(
      `${baseUrl}/posts?populate=*`
    );
    return response.data.data;
  });
};

export const useArticleBySlug = (slug: string) => {
  return useQuery<Post | undefined>(["posts", slug], async () => {
    const response = await axios.get<{ data: Post[] }>(
      `${baseUrl}/posts?filters[Slug][$eq]=${slug}&populate=*`
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
      `${baseUrl}/paid-articles`
    );
    return response.data.data;
  });
};

export const useProjects = () => {
  return useQuery<Projects[]>("projects", async () => {
    const response = await axios.get<{ data: Projects[] }>(
      `${baseUrl}/projects?populate=*`
    );
    return response.data.data;
  });
};
