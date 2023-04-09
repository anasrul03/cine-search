import '../App.css';
import React from 'react';

const MainPage = ({movies}) => {
  // console.log(movies);
  const poster_url = 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2';
  return (
    <>
     {movies?.results?.map((movie) => (
     <div key={movie.id} className='d-flex justify-content-start m-3'>
        <img src={poster_url + movie.poster_path} alt = "Poster"/>
     </div>
     ))}
    </>
  );
};
    
export default MainPage;
