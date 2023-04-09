import { observer } from "mobx-react-lite";
import React from "react";
import ApiStore from "../api-store";

const LatestMovie = () => {
  const apiImgUrl = "https://image.tmdb.org/t/p/w500";
  const results = ApiStore.latest_movies.results;

  React.useEffect(() => {
    ApiStore.fetchLatestMovie();
  });

  return (
    <div>
      <div className="wrapper">
        {results &&
          results?.map((result) => {
            return (
              <div className="card" key={result.id}>
                <img src={apiImgUrl + result.poster_path} alt="POSTER" />
                <h2>{result.title}</h2>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default observer(LatestMovie);
