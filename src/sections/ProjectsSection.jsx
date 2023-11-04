import React from "react";
import { useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import projectsData from "../data/projectsData.json";
import "../styling/ProjectsSection.css";

function ProjectsSection(props) {
  const [value, setValue] = useState([1, 3]);

  function onClick() {
    return;
  }

  return (
    <div className="projectsSection-body" id="project-section">
      <div className="projectsSection-title-desktop">
        <h1>
          <b>/* Projects */</b>
        </h1>
      </div>
      <div
        className="projectsSection-card-container"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {console.log(projectsData)}
        {Object.keys(projectsData).map((project) => (
          <ProjectCard
            key={project}
            projectName={project}
            projectDescription={projectsData[project].description}
            githubLink={projectsData[project].githubLink}
          />
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default ProjectsSection;
