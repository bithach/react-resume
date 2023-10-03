import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../styling/Home.css";

function Home(props) {
  return (
    <div className="background-image">
      <div className="intro-text">
        <h1>Welcome to my website</h1>
        <a href="/AboutMe">About Me</a>
      </div>
    </div>
  );
}

export default Home;
