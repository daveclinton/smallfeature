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
          width: number;
          height: number;
          formats: {
            small: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: null | string;
              size: number;
              width: number;
              height: number;
              provider_metadata: {
                public_id: string;
                resource_type: string;
              };
            };
            thumbnail: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: null | string;
              size: number;
              width: number;
              height: number;
              provider_metadata: {
                public_id: string;
                resource_type: string;
              };
            };
          };
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: null | string;
          provider: string;
          provider_metadata: {
            public_id: string;
            resource_type: string;
          };
          createdAt: string;
          updatedAt: string;
        };
      };
    };
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
  return useQuery<Post>(["posts", slug], async () => {
    const response = await axios.get<{ data: Post[] }>(
      `https://blog-backend-m44q.onrender.com/api/posts?filters[Slug][$eq]=${slug}&populate=*`
    );
    return response.data.data[0];
  });
};
