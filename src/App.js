import React from "react";
import "./App.css";
import MovieCarousel from "./Components/Section/MovieCarousel";
import TrendingMovie from "./Components/Section/TrendingMovie";
import LatestMovie from "./Components/Section/LatestMovie";

function App() {
  return (
    <div>
      <h1>Pick Your Movie</h1>
      <MovieCarousel />
      <h1>Now Showing</h1>
      <LatestMovie />
      <h1>Trending Movies</h1>
      <TrendingMovie />
    </div>
  );
}

export default App;
