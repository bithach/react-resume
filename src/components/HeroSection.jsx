import "../styling/HeroSection.css";
import { Container } from "react-bootstrap/";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function HeroSection(props) {
  return (
    <Container>
      <Row className="align-items-center">
        <Col style={{ height: 100 + "%", textAlign: "center" }}>
          <div className="heroText">
            <h1>THACH HUYNH</h1>
            <br />
            <p>Striving for something new</p>
            <Button size="lg" variant="outline-dark">
              Contact Me
            </Button>
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
  );
}

export default HeroSection;
