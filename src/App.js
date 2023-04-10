import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";
import "./Components/Styles/MovieDetails.scss";
import { LatestMovie, PopularMovie } from "./Components/Section";
import Header from "./Components/header";
import Footer from "./Components/footer";
import SearchResults from "./Components/SearchResults";
//import React, { useState } from 'react';
// import MovieSearch from "./Components/MovieSearch";





//component to display trending and now showing movies 
const Test = () => {
  return(
    <div className="section">
      <h1>Now Showing</h1>
      <LatestMovie />
      <h1>Trending Now</h1>
      <PopularMovie/>
    </div>
 )
}
  
function App() {
  return (
    <div className="body">
     <BrowserRouter>
       <Header/>
         <Routes>
           <Route path="/search/:searchTerm" element={<SearchResults />} />
            <Route path="/" element={<Test />} /> 
            {/* <Route path="/movie/:id" element={<MovieDetails />} /> */}
         <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
       <Footer/>
     </BrowserRouter>
   </div>
      
  );
}

export default App;


