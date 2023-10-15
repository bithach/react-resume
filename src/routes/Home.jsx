import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../styling/Home.css";
import "../components/AboutMeSection";
import HeroSection from "../components/HeroSection";
import AboutMeSection from "../components/AboutMeSection";
import WorkExperienceSection from "../components/WorkExperienceSection";
import ProjectsSection from "../components/ProjectsSection";

function Home(props) {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <WorkExperienceSection />
      <ProjectsSection />
    </>
  );
}

export default Home;
