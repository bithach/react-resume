import "../styling/HeroSection.css";
import { Container } from "react-bootstrap/";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HeroSection(props) {
  return (
    <Container>
      <Row style={{ padding: "10px 0 0 0" }}>
        <Col style={{ height: 100 + "%", textAlign: "center" }}>
          <div className="heroText">
            <h1>THACH HUYNH</h1>
            <br />
            <p>Striving for something new</p>
          </div>
        </Col>
        <Col>
          <img
            src={require("../../src/styling/images/IMG_3938.JPG")}
            alt="Thach Huynh"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default HeroSection;
