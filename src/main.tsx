import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme.ts";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
