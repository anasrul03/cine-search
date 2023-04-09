import React from 'react';
import "./Styles/HomePage.scss";

function HomePage() {
  return (
    <div className="landing-page">
      <div className="landing-page__header">
        <h1>Welcome to Cine-Search</h1>
        <h3>Discover amazing movies with us</h3>
      </div>
      <div className="landing-page__body">
        <p>
        Uncover the Cinematic Universe: Discover the latest and greatest movies, all in one place. Our movie search engine delivers fast and accurate results to help you find your next movie obsession. Experience the magic of movies with us.
        </p>
      </div>
      <div>
        <h2>Meet The Team</h2>
      </div>
      <div className='landing-page__gallery'>
        <div className='gallery-item'>
        <img src='https://via.placeholder.com/350x150.png?text=Gallery+Image+1'></img>
        <alt className='gallery-image-1'></alt>
        <img src='https://via.placeholder.com/350x150.png?text=Gallery+Image+2'></img>
        <alt className='gallery-image-2'></alt>
        <img src='https://via.placeholder.com/350x150.png?text=Gallery+Image+3'></img>
        <alt className='gallery-image-3'></alt>
        <img src='https://via.placeholder.com/350x150.png?text=Gallery+Image+4'></img>
        <alt className='gallery-image-4'></alt>
        </div>
      </div>
      <div className='landing-page__contact'>
        <h2>Contact Us</h2>
        <p>123 Main St.</p>
        <p>Cyberjaya, Selangor</p>
        <p>Phone: 03-5328265</p>
        <p>Email: info@cine-search.com</p>
      </div>
    </div>
  );
}
export default HomePage;