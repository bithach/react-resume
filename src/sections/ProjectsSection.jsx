import React from "react";
import { ProjectCard } from "../components/ProjectCard";
import projectsData from "../data/projectsData.json";

function ProjectsSection(props) {
  return (
    <div className="projectsSection-body" id="projects">
      <h1 className="projectsSection-title-desktop font-black text-center text-[#008000] underline pt-[20px] pb-[10px] md:text-[50px]">
        /* Projects *\
      </h1>
      <div className="projectsSection-card-container w-full justify-center flex flex-wrap">
        {Object.keys(projectsData).map((project) => (
          <ProjectCard
            projectName={project}
            projectLogo={projectsData[project].image}
            projectDescription={projectsData[project].description}
            githubLink={projectsData[project].githubLink}
            projectTags={projectsData[project].tags}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
