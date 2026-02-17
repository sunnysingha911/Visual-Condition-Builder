import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { NodeContextProvider } from "./context/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NodeContextProvider>
      <App />
    </NodeContextProvider>
  </StrictMode>,
);
