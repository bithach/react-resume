import "../styling/HeroSection.css";
import { Container } from "react-bootstrap/";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import linkedInIcon from "../styling/images/social_icons/linkedin.svg";
import mailIcon from "../styling/images/social_icons/mail.svg";
import githubIcon from "../styling/images/social_icons/github-mark.svg";

function HeroSection(props) {
  return (
    <div className="hero-section-outer pb-[100px]" id="aboutme">
      <Container>
        <Row className="heroRow align-items-center">
          <Col style={{ height: 100 + "%", textAlign: "center" }}>
            <div className="hero-text ">
              <h1 className="font-black text-6xl">THACH HUYNH</h1>
              <h5 className="font-bold text-3xl">Striving for something new</h5>
              <p className="font-semibold text-xl">
                <br />I am currently a senior at the University of Texas at
                Dallas graduating Fall 2023. I primarly used Java and Python
                throughout my college career. I am currently learning
                Javascript/Typescript in web development environemnt using
                React.
              </p>
              <div className="socials-container flex flex-wrap ">
                <a href="mailto:bithach@hotmail.com">
                  <img
                    className="h-8 pr-2"
                    src={mailIcon}
                    alt="LinkedIn Icon"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/thachhhuynh/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-8 px-2"
                    src={linkedInIcon}
                    alt="LinkedIn Icon"
                  />
                </a>
                <a
                  href="https://github.com/bithach"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-8 px-2"
                    src={githubIcon}
                    alt="LinkedIn Icon"
                  />
                </a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="img-desktop relative"></div>
            <div className="text-center text-gray-800">
              Image taken at Lost Mines Trail in Big Bend National Park
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;
