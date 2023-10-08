import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Home/>
      <Route />
    </BrowserRouter>
  );
};

export default App;
