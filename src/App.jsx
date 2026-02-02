import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DocsPage from "./pages/DocsPage";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/docs/:docId" element={<DocsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
