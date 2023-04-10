import React from "react";
// import ApiStore from "./api-store";
import { observer } from "mobx-react-lite";
import "./Styles/MovieCard.scss";
import { NavLink } from "react-router-dom";

function MovieCard(props) {
  const apiImgUrl = "https://image.tmdb.org/t/p/w500";
  const results = props.getmMovies.results;

  // React.useEffect(() => {
  //   ApiStore.fetchSearchData();
  // }, []);
  // console.log(results);

  return (
    <div>
      <div className="wrapper">
        {results?.map((result) => {
          return (
            result.poster_path && (
              <NavLink className="no-underline" to={`/movie/${result.id}`}>
                <div className="card" key={result.id}>
                  <img src={apiImgUrl + result.poster_path} alt="POSTER" />
                  <h2>{result.title}</h2>
                </div>
              </NavLink>
            )
          );
        })}
      </div>
    </div>
  );
}

export default observer(MovieCard);
