import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import MovieSearch from "./Components/MovieSearch";
import MovieDetails from "./Components/MovieDetails";
import "./Components/Styles/MovieDetails.scss";
import MainpageList from "./Components/MainpageList";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Reset from "./Components/Reset";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<MovieSearch />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/" element={<MainpageList />}/>
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
);
}

export default App;