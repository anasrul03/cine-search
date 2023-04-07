import {useState} from "react";
//import "./index.css";

const SearchBar = ({setResults}) =>{
    const [searchInput, setSearchInput] = useState("");
   
    //function to fetch data from API
    const fetchData =(value)=>{
      fetch("https://api.themoviedb.org/3/movie/550?api_key=d62dc3f89ffd51183a0e62149a3931a4=${searchInput}")
      .then((response)=>response.json())
      .then((json)=>{

        const results=json.filter((movie)=>{
            return (
               value && 
               movie && 
               movie.name && 
               movie.name.toLowerCase().includes(value)
            );

        });
       // console.log(results)
       setResults(results);
      })

    }

    //request to Api everytime text changes in input
    const handleChange=(value)=>{
        setSearchInput(value)
        fetchData(value)
    }
    return (
        <div className="input-search">
            <input placeholder="Type to search..." value={searchInput} onChange={(e)=> handleChange(e.target.value)}/>
            <button>Search</button>
        </div>
    )

}

export default SearchBar;

// import React, { useState } from 'react';

// function SearchBar(props) {
//   const [query, setQuery] = useState('');

//   const handleSearch = async () => {
//     const apiKey = 'YOUR_API_KEY';
//     const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);
//     const data = await response.json();
//     props.onSearchResults(data.results);
//   };

//   const handleChange = event => {
//     setQuery(event.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={query} onChange={handleChange} />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// }

// export default SearchBar;