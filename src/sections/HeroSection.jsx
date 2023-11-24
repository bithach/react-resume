import "../styling/HeroSection.css";
import { Container } from "react-bootstrap/";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function HeroSection(props) {
  return (
    <div className="hero-section-outer pb-[100px]" id="aboutme">
      <Container>
        <Row className="heroRow align-items-center">
          <Col style={{ height: 100 + "%", textAlign: "center" }}>
            <div className="hero-text">
              <h1 className="font-black text-5xl">THACH HUYNH</h1>
              <h5 className="font-bold">Striving for something new</h5>
              <p className="font-semibold">
                <br />I am currently a senior at the University of Texas at
                Dallas graduating Fall 2023. I primarly used Java and Python
                throughout my college career. I am currently learning
                Javascript/Typescript in a web development environemnt using
                React.
              </p>
              <a href="mailto:bithach@hotmail.com">
                <Button size="lg" variant="outline-dark">
                  Contact Me
                </Button>
              </a>
            </div>
          </Col>
          <Col>
            <div className="img-desktop relative"></div>
            <div className="text-center text-gray-800">
              Image taken at Lost Mines Trail at Big Bend Park
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;
