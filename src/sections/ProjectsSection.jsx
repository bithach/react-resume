import React from "react";
import { ProjectCard } from "../components/ProjectCard";
import projectsData from "../data/projectsData.json";
import "../styling/ProjectsSection.css";

function ProjectsSection(props) {
  return (
    <div className="projectsSection-body" id="project-section">
      <h1 className="projectsSection-title-desktop">/* Projects *\</h1>
      <div className="projectsSection-card-container">
        {Object.keys(projectsData).map((project) => (
          <ProjectCard
            projectName={project}
            projectLogo={projectsData[project].image}
            projectDescription={projectsData[project].description}
            githubLink={projectsData[project].githubLink}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
