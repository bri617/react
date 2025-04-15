// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";

// Log to ensure this file is loaded
console.log("Index.tsx loaded");




const App: React.FC = () => {
  console.log("App component rendered");
  return (
    <div>
      <h1>Hello World!</h1>
      <p>This is a minimal React app.</p>
    </div>
  );
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/signup" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
