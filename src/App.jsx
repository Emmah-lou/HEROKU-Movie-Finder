import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Movie from "./components/About";
import NotFound from "./components/Home";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="404" element={<NotFound />} />
    </Routes>
  );
}

export default App;
