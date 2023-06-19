import * as React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Links from "./components/Links";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Links />
    </>
  );
};

export default App;
