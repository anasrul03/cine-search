import React from "react";
//import {useState} from "react";
import SearchBar from "./searchBar";
// import Login from "./Login";
import "./Styles/header.scss";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";


function Header() {
  // const navigate = useNavigate();
  // const navigateToLogin = () => {
  //   //navigate user to login
  //   navigate('/login'); 
  // }
  //const [results, setResults] = useState([]);
  return (
    <div className="header">
      <div className="logo">
        <NavLink className={"no-underline"} to="/">
          <h3>CineSearch</h3>
        </NavLink>
      </div>
      <div className="search">
        <SearchBar></SearchBar>
      </div>
      {/* <div className="login-button">
        <button onClick={navigateToLogin}>Login</button>
      </div> */}
      {/* <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes> */}
    </div>
  );
}

export default Header;
