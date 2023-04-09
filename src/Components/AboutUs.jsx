import { ReactDOM } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/AboutUs.scss";

import React from 'react'

function AboutUs() {
  return (
    <div className="row">
        {/* <div className="col-md-6">
            <img src="https://via.placeholder.com/400x400" alt="About Us" className="img-fluid rounded mb-5" />
        </div> */}
        <div className="col-md-6">
            <h2 className="mb-4">About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, odio vel consequat ultrices, odio dolor lacinia nulla, ac faucibus enim risus in turpis. Sed mollis tellus eu augue euismod, vel malesuada urna bibendum. Nulla euismod metus in justo lacinia pretium. Duis vel ultricies arcu. </p>
          <p>Aliquam tempus, velit sed vestibulum gravida, augue metus posuere lorem, sed venenatis quam elit vel tortor. Fusce tincidunt vel dolor in varius. In lacinia, magna sit amet malesuada dapibus, ipsum leo sodales lorem, vitae feugiat dolor eros sed felis. Fusce suscipit nisi sapien, non bibendum erat posuere nec. </p>
        </div>
      </div>
  );
}

export default AboutUs;