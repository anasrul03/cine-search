import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
// import "./Styles/Section.scss";

export function LatestMovie() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState([]);
  const apiKey = "d62dc3f89ffd51183a0e62149a3931a4";
  let equalTo = "2023";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_year=${equalTo}`
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
      <div className="latest">
        <MovieCard getmMovies={movies} />
      </div>
    </div>
  );
}

export function PopularMovie() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState([]);
  const apiKey = "d62dc3f89ffd51183a0e62149a3931a4";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=3`
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
      <div className="latest">
        <MovieCard getmMovies={movies} />
      </div>
    </div>
  );
}