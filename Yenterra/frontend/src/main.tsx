import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@/components/theme/theme-provider";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="app-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
