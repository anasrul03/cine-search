import React from "react";
import ApiStore from "../api-store";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";

const RelatedMovie = (props) => {
  const apiImgUrl = "https://image.tmdb.org/t/p/w500";
  const results = ApiStore.related_movie.results;
  const pop = props.movieTitle;

  React.useEffect(() => {
    ApiStore.fetchRelatedMovie(pop);
  }, []);

  console.log(props);

  return (
    <div>
      <div className="wrapper">
        {results &&
          results?.map((result) => {
            return (
                result.poster_path &&
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

export default observer(RelatedMovie);
