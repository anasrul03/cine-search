import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import MovieSearch from "./Components/MovieSearch";
import MovieDetails from "./Components/MovieDetails";
import MovieCard from "./Components/MovieCard";

function App() {

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <div>
        <MovieCard/>
        
      </div>
      <Routes>
      <Route path="/" element={<MovieSearch />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;