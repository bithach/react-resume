import React from "react";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function NavbarComponent(props) {
  return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="m-auto">
              <Nav.Link href="#aboutme">Home</Nav.Link>
              <Nav.Link href="#work">Experience</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>);
}

export default NavbarComponent;
