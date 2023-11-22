import "../styling/HeroSection.css";
import { Container } from "react-bootstrap/";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function HeroSection(props) {
  return (
    <div className="hero-section-outer">
      <Container>
        <Row className="align-items-center heroRow">
          <Col style={{ height: 100 + "%", textAlign: "center" }}>
            <div className="heroText ml-16">
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
            <img
              src={require("../../src/styling/images/IMG_3938.JPG")}
              alt="Thach Huynh"
              className="img-desktop"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;
