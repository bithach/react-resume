import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../styling/Home.css";
import "../components/AboutMeSection"
import HeroSection from "../components/HeroSection";
import AboutMeSection from "../components/AboutMeSection";
import WorkExperienceSection from "../components/WorkExperienceSection";

function Home(props) {
  return (
    <>
      <HeroSection/>
      <AboutMeSection/>
      <WorkExperienceSection/>
    </>
  );
}

export default Home;
