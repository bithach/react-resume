import React from "react";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent(props) {
  return (
      <>
        <Navbar sticky="top" expand="lg" bg="dark" data-bs-theme="dark">
          <Container fluid>
            <Navbar.Brand href="#home">Thach Huynh</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="#aboutme">About Me</Nav.Link>
                <Nav.Link href="#workexperience">Experience</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>);
}

export default NavbarComponent;
