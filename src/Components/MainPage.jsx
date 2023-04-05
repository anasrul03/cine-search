import '../App.css';
import requests from '../Requests';
import React, { useEffect, useState } from 'react';
import axios from "axios";

const MainPage = (props) => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
}, []);

}
    
export default MainPage;
