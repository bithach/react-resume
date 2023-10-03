import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slideshow from "../components/Slideshow";
import "../styling/AboutMe.css";

function AboutMe(props) {
  return (
    <div>
      <div class="gradient">
        <img src={require('../styling/images/P1020066.JPG')}></img>
        <h1> Hello World</h1>
      </div>
    </div>
  );
}

export default AboutMe;
