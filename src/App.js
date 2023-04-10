import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";
import "./Components/Styles/MovieDetails.scss";
import MainpageList from "./Components/MainpageList";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainpageList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
