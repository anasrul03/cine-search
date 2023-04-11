import React from "react";
import "./App.css";
import MovieDetails from "./Components/MovieDetails";
import "./Components/Styles/MovieDetails.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainpageList from "./Components/MainpageList";
import NotFound from "./Components/NotFound";
import Header from "./Components/header";
import Footer from "./Components/footer";
import SearchResults from "./Components/SearchResults";
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
          <Route path="/movie/:id" element={<MovieDetails/>} />
          <Route path="/" element={<MainpageList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
