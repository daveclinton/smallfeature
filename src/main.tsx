import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import theme from "../theme.ts";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
