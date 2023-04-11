import React, { useState } from "react";
import { observable } from "mobx";
import { useNavigate } from "react-router";
import ApiStore from "./api-store";
import { useObservable } from "mobx-react-lite";

function MovieSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  // const storeSearch = useObservable({keep: "", setKeep(value){this.keep = value}});
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // ApiStore.fetchRelatedMovie(searchTerm);
    navigate(`/search/${searchTerm}`);
    console.log(searchTerm);
  };
  // const apiKey = 'd62dc3f89ffd51183a0e62149a3931a4';
  // const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;

  // try {
  //   const response = await fetch(url);
  //   const json = await response.json();
  //   setResults(json.results);
  // } catch (error) {
  //   console.error(error);
  // }

  return (
    <div className="input-search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search movies here..."
        />
        <button type="submit">Search</button>
      </form>
      {/* {results.length > 0 && <MovieCard2 results={results}/>} */}
    </div>
  );
}

export default MovieSearch;
