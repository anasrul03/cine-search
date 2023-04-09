// import React, { useEffect, useState } from "react";
// import MovieCard from "./MovieCard";
// import axios from "axios";
// // import "./Styles/Section.scss";
// import ApiStore from "./api-store";
// import { observer } from "mobx-react-lite";

// const PopularMovie = () => {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [movies, setMovies] = useState([]);
//   const apiKey = "d62dc3f89ffd51183a0e62149a3931a4";

//   useEffect(() => {
//     axios
//       .get(
//         `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=3`
//       )
//       .then(
//         (res) => {
//           setIsLoaded(true);
//           setMovies(res.data);
//           console.log("data is available");
//           console.log(res.data);
//         },
//         (data) => {
//           setIsLoaded(true);
//           setError(data);
//           console.log("data error");
//         }
//       );
//   }, []);
//   return (
//     <div>
//       {/* <h1>Latest Movie</h1> */}
//       <div className="popular">
//         <MovieCard getmMovies={movies} />
//       </div>
//     </div>
//   );
// };

// export default PopularMovie;
