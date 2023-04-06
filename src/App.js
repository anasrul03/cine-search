import { useEffect, useState } from "react";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import MovieSearch from "./Components/MovieSearch";
import MovieDetails from "./Components/MovieDetails";
import MovieCard from "./Components/MovieCard";
import './Components/Styles/MovieDetails.scss';

function App() {

  return (
    <BrowserRouter>
 
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