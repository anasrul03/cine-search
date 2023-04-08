import React from "react";
import { LatestMovie, PopularMovie } from "./Section";

const MainpageList = () => {
    return (<div>
        
        <h1>Now Showing</h1>
        <LatestMovie />
        <h1>Trending Now</h1>
        <PopularMovie />
       
      </div>)
}

export default MainpageList;