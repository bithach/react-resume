import { useState } from "react";
import { Container } from "react-bootstrap/";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../styling/WorkExperienceSection.css";
import { experienceData } from "../data/WorkExperienceData";

function WorkExperienceSection(props) {
  const [targetID, setTargetID] = useState(0);
  const [experienceDescription, changeDescription] = useState("");
  const [experienceLogo, changeLogo] = useState();

  function companyButtonClick(event) {
    event.preventDefault();
    setTargetID((a) => event.target.id);
    changeDescription((b) => experienceData[event.target.id - 1].description);
    changeLogo((b) => experienceData[event.target.id - 1].logo);
    return;
  }

  return (
    <div className="workExeperience-body" id="work-section">
      <h1 className="workExeperience-title-desktop">
        <b>/* Work Experience */</b>
      </h1>

      <div className="company-buttons">
        <Button onClick={companyButtonClick} id={1}>
          USAA
        </Button>
      </div>

      {targetID !== 0 ? (
        <>
          <div className="company-box-container-desktop">
            <div className="company-box">
              <Container fluid>
                <Row>
                  <Col
                    style={{
                      display: "flex",
                      textAlign: "center",
                      padding: "20px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {experienceDescription}
                  </Col>
                  <Col style={{ borderLeft: "solid 5px black" }}>
                    <img
                      style={{
                        width: "192px",
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        padding: "10px 0px",
                        height: "auto",
                      }}
                      src={experienceLogo}
                      alt="Company Logo"
                    />
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </>
      ) : (
        <p style={{ textAlign: "center" }}>
          Click on one of the buttons above!
        </p>
      )}
    </div>
  );
}

export default WorkExperienceSection;
