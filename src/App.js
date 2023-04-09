import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import MovieSearch from "./Components/MovieSearch";
import MovieDetails from "./Components/MovieDetails";
import "./Components/Styles/MovieDetails.scss";
import { LatestMovie, PopularMovie } from "./Components/Section";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <h1>Now Showing</h1>
        <LatestMovie />
        <h1>Trending Now</h1>
        <PopularMovie /> */}
        <HomePage />
      </div>
      <Routes>
        {/* <Route path="/" element={<MovieSearch />} /> */}
        {/* <Route path="/movie/:id" element={<MovieDetails />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
