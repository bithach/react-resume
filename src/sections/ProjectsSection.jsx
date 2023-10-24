import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Button, CardGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styling/ProjectsSection.css";

function ProjectsSection(props) {
  const [value, setValue] = useState([1, 3]);

  function onClick() {
    return;
  }

  return (
    <div className="projectsSection-body">
      <div className="projectsSection-title-desktop">
        <h1><b>/* Projects */</b></h1>
      </div>
      <div>
        <span>
          <Row className="m-auto">
            <Card className="text-center mx-auto px-0 project-card-desktop">
              <Card.Img
                src="https://cdn-icons-png.flaticon.com/512/3142/3142722.png"
                style={{ padding: "10px 0px" }}
              />
              <Card.Title>Brown Bag</Card.Title>
              <Card.Text>Loren ipsum</Card.Text>
              <div style={{padding:"0px 0px 5px"}}>
                <Button style={{ alignItems: "flex-start" }}>Github</Button>
              </div>
              <Card.Footer>
                <div>Python</div>
              </Card.Footer>
            </Card>
            <Card className="text-center mx-auto px-0 project-card-desktop">
              <Card.Img
                src="https://cdn-icons-png.flaticon.com/512/3142/3142722.png"
                style={{ padding: "10px 0px" }}
              />
              <Card.Title>Venmo Scraper</Card.Title>
              <Card.Text>Loren ipsum</Card.Text>
              <div style={{padding:"0px 0px 5px"}}>
                <Button style={{ alignItems: "flex-start" }}>Github</Button>
              </div>
              <Card.Footer>
                <div>Python</div>
              </Card.Footer>
            </Card>
          </Row>
        </span>
      </div>
    </div>
  );
}

export default ProjectsSection;
