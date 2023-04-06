import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const apiKey = 'd62dc3f89ffd51183a0e62149a3931a4';
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;

    const fetchMovie = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setMovie(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={`${movie.title} Poster`} />
      <p>{movie.release_date}</p>
      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieDetails;
