import React from "react";
import "./App.css";
// import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import MovieSearch from "./Components/MovieSearch";
import MovieDetails from "./Components/MovieDetails";
import "./Components/Styles/MovieDetails.scss";
import Header from "./Components/header";
import Footer from "./Components/footer";
import SearchResults from "./Components/SearchResults";
import MovieCard from "./Components/MovieCard";
import TrendingMovie from "./Components/Section/TrendingMovie";
import LatestMovie from "./Components/Section/LatestMovie";

const Test = () => {
  return (
    <div className="section">
      <h1>Now Showing</h1>
      <LatestMovie />
      <h1>Trending Now</h1>
      <TrendingMovie />
    </div>
  );
};

function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/search/:searchTerm" element={<SearchResults />} />
          <Route path="/" element={<Test />} />
          {/* <Route path="/movie/:id" element={<MovieDetails />} /> */}
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
