import { useState } from "react";
import { Container } from "react-bootstrap/";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../styling/WorkExperienceSection.css";
import { experienceData } from "../data/WorkExperienceData"

function WorkExperienceSection(props) {
  const [value, setValue] = useState(0);
  const [experienceDescription, changeDescription] = useState("");

  function companyButtonClick(event) {
    setValue((a) => event.target.id);
    console.log(experienceData)
    console.log(experienceData[value-1].description)
    changeDescription((b)=>experienceData[value-1].description)
    event.preventDefault();
    return;
  }

  return (
    <div className="workExeperience-body">
      <h1 className="workExeperience-title-desktop">/* Work Experience */</h1>

      <div className="company-buttons">
        <Button onClick={companyButtonClick} id={1}>
          USAA
        </Button>
      </div>

      <div className="company-box-container-desktop">
        <div className="company-box">
          <Container fluid>
            <Row>
              {/*This is for the description*/}
              <Col style={{ textAlign: "center" }}>
                {experienceDescription}
              </Col>
              {/*This is for the company logo*/}
              <Col style={{ textAlign: "center" }}>Image here</Col>
            </Row>
            <Row
              style={{ justifyContent: "center", borderTop: "solid black 3px" }}
            >
              This is stuff
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default WorkExperienceSection;
