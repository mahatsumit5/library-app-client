import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiFillDashboard, AiFillHome } from "react-icons/ai";
import { GiEntryDoor } from "react-icons/gi";
import { ImExit } from "react-icons/im";
const Header = () => {
  return (
    <Navbar expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">LM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">
              <AiFillHome /> Home
            </Nav.Link>
            <Nav.Link href="/dashboard">
              <AiFillDashboard /> Dashboard
            </Nav.Link>
            <Nav.Link href="/signout">
              {" "}
              <ImExit /> Sign out
            </Nav.Link>
            <Nav.Link href="/signin">
              {" "}
              <GiEntryDoor /> Sign in
            </Nav.Link>
            <Nav.Link href="/signup">
              {" "}
              <ImExit /> Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
