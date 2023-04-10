import { observer } from "mobx-react-lite";
import React from "react";
import ApiStore from "../api-store";
import { NavLink } from "react-router-dom";

const LatestMovie = () => {
  const apiImgUrl = "https://image.tmdb.org/t/p/w500";
  const results = ApiStore.latest_movies.results;

  React.useEffect(() => {
    ApiStore.fetchData(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${ApiStore.apiKey}&page=5`
    );
  }, []);
  console.log(results);

  return (
    <div>
      <div className="wrapper">
        {results &&
          results?.map((result) => {
            return (
              <NavLink className="no-underline" to={`/movie/${result.id}`}>
                <div className="card" key={result.id}>
                  <img src={apiImgUrl + result.poster_path} alt="POSTER" />
                  <h2>{result.title}</h2>
                </div>
              </NavLink>
            );
          })}
      </div>
    </div>
  );
};

export default observer(LatestMovie);
