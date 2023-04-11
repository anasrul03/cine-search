import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LatestMovie from "./Section/LatestMovie";

function MovieDetails() {
  // Initialize state variables for movie and cast
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);

  // Get the movie ID parameter from the URL using the useParams() hook
  const { id } = useParams();

  // Make API calls to fetch movie and cast details
  useEffect(() => {
    // Define the API key and URLs for the movie and cast details
    const apiKey = "d62dc3f89ffd51183a0e62149a3931a4";
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
    const creditsUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`;

    // Define an async function to fetch the movie details
    const fetchMovie = async () => {
      try {
        // Make an API call to fetch the movie details using the URL
        const response = await fetch(url);

        // Convert the response to JSON
        const json = await response.json();
        // Update the state variable "movie" with the fetched movie details
        setMovie(json);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchCredits = async () => {
      try {
        const response = await fetch(creditsUrl);
        const json = await response.json();
        setCast(json.cast);
      } catch (error) {
        console.error(error);
      }
    };

    // Call the fetchMovie() and fetchCredits() functions
    fetchMovie();
    fetchCredits();
  }, [id]); // Run the useEffect() hook whenever the "id" parameter changes

  // If movie details are not available, display a "Movie Not Found" message
  if (!movie) {
    return <h1> Movie Not Found </h1>;
  }

  return (
    <div className="movie_details">
      <div className="movie__header">
        <img
          className="movie__backdrop"
          src={`https://image.tmdb.org/t/p/original${
            movie ? movie.backdrop_path : ""
          }`}
        />
      </div>

      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/original${
                movie ? movie.poster_path : ""
              }`}
            />
          </div>
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <div className="movie__name">
              {movie ? movie.original_title : ""}
            </div>
            <div className="movie__tagline">{movie ? movie.tagline : ""}</div>
            <div className="movie__rating">
              {movie.vote_average ? movie.vote_average.toFixed(1) : "-"}{" "}
              <i className="fas fa-star" /> /10
            </div>
            <div className="movie__runtime">
              {movie ? movie.runtime + " mins" : ""}
            </div>
            <div className="movie__releaseDate">
              {movie ? "Release date: " + movie.release_date : ""}
            </div>
            <div className="movie__genres">
              {movie && movie.genres
                ? movie.genres.map((genre) => (
                    <>
                      <span className="movie__genre" id={genre.id}>
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
          </div>
          <div className="movie__detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div className="synopsis">{movie ? movie.overview : ""}</div>
            <div className="castList">Full Cast List</div>
            <div className="movie__cast">
              {cast && cast.length > 0
                ? cast.map((cast) => (
                    <span className="movie__castMember">{cast.name}, </span>
                  ))
                : ""}
            </div>

            {movie && movie.imdb_id && (
              <a
                href={"https://www.imdb.com/title/" + movie.imdb_id}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <p>
                  <span className="movie__imdbButton movie__Button">
                    IMDb<i className="newTab fas fa-external-link-alt"></i>
                  </span>
                </p>
              </a>
            )}
          </div>
        </div>
      </div>
      <h1>Check out! Latest Movies</h1>
      <div className="bottomlist">
        <LatestMovie />
      </div>
    </div>
  );
}

export default MovieDetails;
