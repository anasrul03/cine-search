import React from "react";
import ApiStore from "./api-store";
import { observer } from "mobx-react-lite";
import "./Styles/MovieCard.scss";

function MovieCard() {
  const apiImgUrl = "https://image.tmdb.org/t/p/w500";
  const results = ApiStore.movies.results;

  React.useEffect(() => {
    ApiStore.fetchSearchData();
  }, []);
  console.log(results);

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
}

export default observer(MovieCard);
