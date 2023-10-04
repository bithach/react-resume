import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../styling/Home.css";
import "../components/AboutMeSection"
import HeroSection from "../components/HeroSection";

function Home(props) {
  return (
    <>
      <HeroSection/>
    </>
  );
}

export default Home;
