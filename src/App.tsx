import * as React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Links from "./components/Links";
import ArticleCard from "./components/ArticleCard";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Links />
      <ArticleCard />
    </>
  );
};

export default App;
