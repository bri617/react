import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Log to ensure this file is loaded
console.log("Index.tsx loaded");

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error('Root element not found! Make sure there is a <div id="root"></div> in your HTML.');
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
