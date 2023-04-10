// import React from "react";
// import "./Styles/MovieCard.scss";

// function MovieCard(props) {
//   debugger
//   const apiImgUrl = "https://image.tmdb.org/t/p/w500";
//   const results = props.getmMovies.results;

//   console.log(results);
//   return (
//     <div>
//       <div className="wrapper">
//         {results?.map((result) => {
//           return (
//             <div className="card" key={result.id}>
//               <img src={apiImgUrl + result.poster_path} alt="POSTER" />
//               <h2>{result.title}</h2>
//               {/* <h3>{result.release_date}</h3> */}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default MovieCard;
import React from "react";
import "./Styles/MovieCard.scss";
import { NavLink, useNavigate } from "react-router-dom";

function MovieCard(props) {
  const apiImgUrl = "https://image.tmdb.org/t/p/w500";
  const results = props.getmMovies.results;

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
      </div>
    </div>
);
}

export default MovieCard;
