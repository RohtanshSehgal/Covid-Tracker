import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Components/Nav/Nav.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Views/Home";

import Curated from "./Views/Curated.jsx";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/curated" exact element={<Curated />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
