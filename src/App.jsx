import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import TopicPage from "./pages/TopicPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/questions/:topic" element={<TopicPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
