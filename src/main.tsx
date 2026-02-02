import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { VideosProvider } from "./contexts/VideosContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <VideosProvider>
      <App />
    </VideosProvider>
  </StrictMode>,
);
