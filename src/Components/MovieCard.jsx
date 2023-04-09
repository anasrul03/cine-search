import React from "react";
import ApiStore from "./api-store";
import { observer } from "mobx-react-lite";
import "./Styles/MovieCard.scss";
import { NavLink, useNavigate } from "react-router-dom";

function MovieCard() {
  const apiImgUrl = "https://image.tmdb.org/t/p/w500";
  const results = ApiStore.movies.results;

  React.useEffect(() => {
    ApiStore.fetchSearchData();
  }, []);
  console.log(results);

  const navigate = useNavigate();

  const test = (id) => {
    debugger
    console.log("Id is getting");
    navigate(`/movie/${id}`);
  }

  return (
    
     <div>
      <div className="wrapper">
<<<<<<< HEAD
        {results &&
          results?.map((result) => {
            return (
              <div className="card" key={result.id}>
                <img src={apiImgUrl + result.poster_path} alt="POSTER" />
                <h2>{result.title}</h2>
              </div>
            );
          })}
=======
        {results?.map((result) => {
          return (
            
              
              <NavLink to={`/movie/${result.id}`}>
                <div className="card" key={result.id}>
                <img src={apiImgUrl + result.poster_path} alt="POSTER" />
                <h2>{result.title}</h2>
                {/* <h3>{result.release_date}</h3> */}
                </div>
              </NavLink>
            
          );
        })}
>>>>>>> dcfd6b1201ce88eeb121eb156c60a5c54770b5ec
      </div>
    </div>
    
   
   

    
  );
}

export default observer(MovieCard);
