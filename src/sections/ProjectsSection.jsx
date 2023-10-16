import { useState } from "react";
import "../styling/ProjectsSection.css";
import { Container } from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProjectsSection(props) {
  const [value, setValue] = useState([1, 3]);

  function onClick() {
    return;
  }

  return (
    <div className="projectsSection-body">
      <div className="projectsSection-title-desktop">
        <h1>/* Projects */</h1>
      </div>
      <div className="project-card"></div>
    </div>
  );
}

export default ProjectsSection;