import * as React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Links from "./components/Links";
import ArticleCard from "./components/ArticleCard";
import { Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import ArticlePost from "./components/ArticlePost";

const queryClient = new QueryClient();

const App: React.FC = () => {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/";
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      {isHomeRoute && (
        <>
          <Hero />
         
          <ArticleCard />
        </>
      )}
      <Routes>
        <Route path="/article/:slug" element={<ArticlePost />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
