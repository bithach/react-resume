import { useState } from "react";
import { Container } from "react-bootstrap/";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../styling/WorkExperienceSection.css";
import { experienceData } from "../data/WorkExperienceData"

function WorkExperienceSection(props) {
  const [targetID, setTargetID] = useState(0);
  const [experienceDescription, changeDescription] = useState("");
  const [experienceLogo, changeLogo] = useState("")

  function companyButtonClick(event) {
    event.preventDefault()
    setTargetID((a)=>event.target.id)
    changeDescription((b)=>experienceData[event.target.id-1].description)
    return;
  }

  return (
    <div className="workExeperience-body">
      <h1 className="workExeperience-title-desktop"><b>/* Work Experience */</b></h1>

      <div className="company-buttons">
        <Button onClick={companyButtonClick} id={1}>
          USAA
        </Button>
      </div>

      {targetID !== 0 ? <>
      <div className="company-box-container-desktop">
        <div className="company-box">
          <Container fluid>
            <Row>
              <Col style={{ textAlign: "center" }}>
                {experienceDescription}
              </Col>
              <Col>
                Image Here
              </Col>
            </Row>
          </Container>
        </div>
      </div> 
      </>: <p style={{textAlign:"center"}}>Click on one of the buttons above!</p>}
    </div>
  );
}

export default WorkExperienceSection;
