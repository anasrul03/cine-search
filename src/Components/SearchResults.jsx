import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useParams } from "react-router";
import axios from "axios";
import Header from "./header";
import { NavLink } from "react-router-dom";
import "./Styles/MovieCard.scss";

const SearchResults = () => {
  const { searchTerm } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState([]);
  const apiKey = "d62dc3f89ffd51183a0e62149a3931a4";
  let equalTo = "2023";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`
      )
      .then(
        (res) => {
          setIsLoaded(true);
          setMovies(res.data);
          console.log("data is available");
          console.log(res.data);
        },
        (data) => {
          setIsLoaded(true);
          setError(data);
          console.log("data error");
        }
      );
  }, []);

  return (
    <div>
      {/* <h1>Latest Movie</h1> */}

      <div className="list-button">
        <MovieCard getmMovies={movies} getSearch={searchTerm} />
        <NavLink to="/">
          <button>&laquo; Back</button>
        </NavLink>
      </div>
    </div>
  );
};

export default SearchResults;
