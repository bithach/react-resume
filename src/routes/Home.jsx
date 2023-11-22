import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import NavbarComponent from "../components/Navbar";
import HeroSection from "../sections/HeroSection";
import WorkExperienceSection from "../sections/WorkExperienceSection";
import ProjectsSection from "../sections/ProjectsSection";

function Home(props) {
  return (
    <>
      <NavbarComponent />
      <HeroSection />
      <WorkExperienceSection />
      <ProjectsSection />
    </>
  );
}

export default Home;
