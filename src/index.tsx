import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";  // Bundled CSS

console.log("Index.tsx loaded");

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Root element not found!");
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
