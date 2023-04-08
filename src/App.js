import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import MovieSearch from "./Components/MovieSearch";
import MovieDetails from "./Components/MovieDetails";
import "./Components/Styles/MovieDetails.scss";
import MainpageList from "./Components/MainpageList";


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<MovieSearch />} /> */}
        <Route path="/" element={<MainpageList />}/>
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;