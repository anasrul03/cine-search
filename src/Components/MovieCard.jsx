import React from "react";
import "./Styles/MovieCard.scss";

function MovieCard() {
  let movieImage = [
    "https://image.tmdb.org/t/p/original//vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    "https://m.media-amazon.com/images/M/MV5BNmM2YmY2MzgtZTViNC00NGQxLWE5ZjEtNjFjZmUxZTBkN2Q1XkEyXkFqcGdeQXVyODA1NjQ0OTY@._V1_QL100_UY1000_CR0,,1500,1000.jpg",
    "https://image.tmdb.org/t/p/original//ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
    "https://image.tmdb.org/t/p/original//nCzzQKGijVzfGFg42id7uDLOjY5.jpg",
    "https://image.tmdb.org/t/p/original//34m2tygAYBGqA9MXKhRDtzYd4MR.jpg",
  ];

  return (
    <div>
      <div className="wrapper">
        <div className="card">
          <img src={movieImage[3]} alt="POSTER" />
          <h2>Movie title</h2>
          <h3>Movie year</h3>
        </div>
        <div className="card">
          <img src={movieImage[1]} alt="POSTER" />
          <h2>Movie title</h2>
          <h3>Movie year</h3>
        </div>
        <div className="card">
          <img src={movieImage[2]} alt="POSTER" />
          <h2>Movie title</h2>
          <h3>Movie year</h3>
        </div>
        <div className="card">
          <img src={movieImage[0]} alt="POSTER" />
          <h2>Movie title</h2>
          <h3>Movie year</h3>
        </div>
        <div className="card">
          <img src={movieImage[4]} alt="POSTER" />
          <h2>Movie title</h2>
          <h3>Movie year</h3>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
