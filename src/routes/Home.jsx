import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import NavbarComponent from "../components/Navbar";
import HeroSection from "../sections/HeroSection";
import WorkExperienceSection from "../sections/WorkExperienceSection";
import ProjectsSection from "../sections/ProjectsSection";

function Home(props) {
  return (
    <div className="bg-gradient-to-b from-aqua via-aqua">
      <NavbarComponent />
      <div className="mx-auto max-w-7xl">
        <HeroSection />
        <WorkExperienceSection />
        <ProjectsSection />
      </div>
    </div>
  );
}

export default Home;
