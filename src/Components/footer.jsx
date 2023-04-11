import React from "react";
import "./Styles/footer.scss";

function Footer() {
  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <h4>About Us</h4>
            <p>
              CineSearch is a app that helps you find and discover movies with
              different genres and latest movies.
            </p>
          </div>
          <div class="col-sm-6">
            <h4>Contact Us</h4>
            <ul>
              <li>Email: info@moviesearchapp.com</li>
              <li>Phone: 011-2345678</li>
              <li>Address: ABC Town</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bottom-bar">
        <div class="container">
          <p>&copy; 2023 Movie Search App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
