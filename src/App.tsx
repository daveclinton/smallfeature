import * as React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Links from "./components/Links";
import ArticleCard from "./components/ArticleCard";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Hero />
      <Links />
      <ArticleCard />
    </QueryClientProvider>
  );
};

export default App;
