import "../styling/HeroSection.css";
import { Container } from "react-bootstrap/";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HeroSection(props) {
  return (
    <Container>
      <Row>
        <Col style={{ height: 100 + "%" }}>
          <div className="heroText">
            <h1>THACH HUYNH</h1>
            <p>Striving for something new</p>
          </div>
        </Col>
        <Col>
          <div className="selfIamge">
            <img
              src={require("../../src/styling/images/P1020066.JPG")}
              alt="Thach Huynh"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HeroSection;
