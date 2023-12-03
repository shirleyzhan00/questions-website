import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Home from "./pages/Home";
import TopicPage from "./pages/TopicPage";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/questions/:topic" element={<TopicPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
