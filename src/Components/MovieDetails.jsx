import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function MovieDetails() {
  debugger
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
    
    <div className="movie-details">
    <h1>{movie.title}</h1>
    <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={`${movie.title} Poster`} />
    <table>
      <tbody>
        <tr>
          <th>Release Date:</th>
          <td>{movie.release_date}</td>
        </tr>
        <tr>
          <th>Genres:</th>
          <td>
            {movie.genres && movie.genres.map(genre => genre.name).join(', ')}
          </td>
        </tr>
        <tr>
          <th>Rating:</th>
          <td>{movie.vote_average ? movie.vote_average.toFixed(1) : '-' }</td>
        </tr>
        <tr>
          <th>Overview:</th>
          <td>{movie.overview}</td>
        </tr>
      </tbody>
    </table>
  </div>

  );
}

export default MovieDetails;
