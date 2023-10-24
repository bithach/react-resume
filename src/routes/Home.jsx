import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../styling/Home.css";
import NavbarComponent from "../components/Navbar";
import HeroSection from "../sections/HeroSection";
import AboutMeSection from "../sections/AboutMeSection";
import WorkExperienceSection from "../sections/WorkExperienceSection";
import ProjectsSection from "../sections/ProjectsSection";

function Home(props) {
  return (
    <>
      <NavbarComponent/>
      <HeroSection />
      <AboutMeSection />
      <WorkExperienceSection />
      <ProjectsSection />
    </>
  );
}

export default Home;
