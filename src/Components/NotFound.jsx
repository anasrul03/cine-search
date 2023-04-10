import React from "react";
import "./Styles/NotFound.scss";
import errorImage from "../images/error.png";

function NotFound() {
  return (
    <div className="notfound">
      <div className="error">404 Not Found</div>
      <div className="message">The page you're looking for could not be found.</div>
      <img src={errorImage} alt="Error" />
    </div>
  );
}

export default NotFound;
