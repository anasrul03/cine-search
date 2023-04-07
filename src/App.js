import "./App.css";
import { LatestMovie, PopularMovie } from "./Components/Section";

function App() {
  return (
    <div>
      {/* <h1>Pick Your Movie</h1> */}
      {/* <MovieCarousel /> */}
      <h1>Now Showing</h1>
      <LatestMovie />
      <h1>Trending Movies</h1>
      <PopularMovie />
    </div>
  );
}

export default App;
