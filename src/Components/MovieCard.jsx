import React from "react";
import "./Styles/MovieCard.scss";

function MovieCard(props) {
  const apiImgUrl = "https://image.tmdb.org/t/p/w500";
  const results = props.getmMovies.results;

  console.log(results);
  return (
    <div>
      <div className="wrapper">
        {results?.map((result) => {
          return (
            <div className="card" key={result.id}>
              <img src={apiImgUrl + result.poster_path} alt="POSTER" />
              <h2>{result.title}</h2>
              {/* <h3>{result.release_date}</h3> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MovieCard;
