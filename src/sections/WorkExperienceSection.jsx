import { useState } from "react";
import { Container } from "react-bootstrap/";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../styling/WorkExperienceSection.css";

function WorkExperienceSection(props) {
  const [value, setValue] = useState(0);

  function companyButtonClick(event) {
    setValue((a) => event.target.id);
    event.preventDefault();
    return;
  }

  return (
    <div className="workExeperience-body">
      <h1 className="workExeperience-title-desktop">/* Work Experience */</h1>

      <div className="company-buttons">
        <Button onClick={companyButtonClick} id={1}>
          Company Name
        </Button>
        <Button onClick={companyButtonClick} id={2}>
          Company Name
        </Button>
        <Button>Company Name</Button>
      </div>

      <div className="company-box-container-desktop">
        <div className="company-box">
          <Container fluid>
            <Row>
              {/*This is for the description*/}
              <Col style={{ textAlign: "center" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Sagittis id consectetur purus ut faucibus pulvinar. Imperdiet
                massa tincidunt nunc pulvinar sapien. Nunc sed velit dignissim
                sodales ut eu. Viverra adipiscing at in tellus integer feugiat
                scelerisque varius. Laoreet id donec ultrices tincidunt arcu non
                sodales neque sodales. Lectus arcu bibendum at varius vel
                pharetra. Pharetra convallis posuere morbi leo urna molestie at
                elementum. Eu mi bibendum neque egestas congue quisque. Netus et
                malesuada fames ac. Commodo odio aenean sed adipiscing diam
                donec adipiscing tristique risus. Mauris vitae ultricies leo
                integer. Egestas pretium aenean pharetra magna ac placerat.
                Faucibus et molestie ac feugiat sed lectus vestibulum mattis.
                Pulvinar pellentesque habitant morbi tristique senectus et
                netus. Vestibulum lorem sed risus ultricies tristique nulla
                aliquet enim tortor. Odio ut sem nulla pharetra diam. Aliquam
                eleifend mi in nulla posuere sollicitudin. Aenean pharetra magna
                ac placerat vestibulum lectus mauris ultrices eros.
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
