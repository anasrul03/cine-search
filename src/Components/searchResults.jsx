import React from 'react'
import SearchBar from './searchBar';

const SearchResults = ({results}) => {
  return (
    <div className="search-list">
        {results.map((result, id) =>{
              return <div key={id}> {result.name}</div>
                    
          })}  
    </div>
  );
};
export default SearchResults;
