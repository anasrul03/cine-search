import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import MovieSearch from "./Components/MovieSearch";
import MovieDetails from "./Components/MovieDetails";
import "./Components/Styles/MovieDetails.scss";
import { LatestMovie, PopularMovie } from "./Components/Section";
import Header from "./Components/header";
import Footer from "./Components/footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <h1>Now Showing</h1>
        <LatestMovie />
        <h1>Trending Now</h1>
        <PopularMovie />
        <Footer/>
      </div>
      <Routes>
        {/* <Route path="/" element={<MovieSearch />} /> */}
        {/* <Route path="/movie/:id" element={<MovieDetails />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
