import React from "react";
import amarImg from "./Team/amar.png";
import anasImg from "./Team/anas.png";
import munnImg from "./Team/munn.png";
import vinoImg from "./Team/vino.png";
import "./Styles/AboutUs.scss";
const AboutUs = () => {
  return (
    <div>
      <h1>Our Team</h1>
      <div className="wrap-box">
        <img src={amarImg} alt="Ammar" />
        <div class="name">
          <h1>Amarnath</h1>
        </div>
        <img src={anasImg} alt="Anas" />
        <div class="name2">
          <h1>Anas Rul</h1>
        </div>
        <img src={munnImg} alt="Munn" />
        <div class="name3">
          <h1>Munn Faye</h1>
        </div>
        <img src={vinoImg} alt="Vino" />
        <div class="name4">
          <h1>Vinothinni</h1>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
