import { useState } from "react";
import "../styling/ProjectsSection.css";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
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
      <div>
        <Card className="text-center mx-auto" style={{ width: "15rem" }}>
          <Card.Img
            src="https://cdn-icons-png.flaticon.com/512/3142/3142722.png"
            style={{ padding: "10px 0px" }}
          />
          <Card.Title>Brown Bag</Card.Title>
          <Card.Text>Loren ipsum</Card.Text>
          <div>
            <Button style={{ alignItems: "flex-start" }}>Github</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default ProjectsSection;
