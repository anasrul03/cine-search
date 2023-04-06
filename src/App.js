import { useEffect, useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./Components/MainPage";
// import "./Styles/MainPage.scss"
import AboutUs from "./Components/AboutUs";
// import MovieCard from "./Components/MovieCard";

const App = () => {
  const [movies, setMovies] = useState([]);
  // const [searchValue, setSearchValue] = useState([]);

  const getMovieRequest = async () => {
    const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=d62dc3f89ffd51183a0e62149a3931a4"
    const response = await fetch(url);
    const responseJson = await response.json();

    // console.log(responseJson);
    setMovies(responseJson);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    // <div className="wrapper">
    //   <div className="row">
    //     <MainPage movies = {movies} />
    //   </div>
    //   {/* <MovieCard /> */}
    // </div>
    <>
      <AboutUs />
    </>
  );
}

export default App;
