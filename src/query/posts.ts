import { useQuery } from "react-query";
import axios from "axios";

interface Post {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    post: string;
  };
}

export const usePosts = () => {
  return useQuery<Post[]>("posts", async () => {
    const response = await axios.get<{ data: Post[] }>(
      "https://blog-backend-m44q.onrender.com/api/posts"
    );
    return response.data.data;
  });
};
