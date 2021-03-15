import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import s from "styled-components";

const NavbarContainer = s(Navbar)`
  border-bottom: 1px solid rgba(0,0,0,.45);
`;

const Header = () => {
  return (
    <NavbarContainer
      collapseOnSelect
      sticky="top"
      expand="lg"
      bg="light"
      variant="light"
    >
      <Navbar.Brand>
        <Link to="/">Lakerja</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Internship</Nav.Link>
          <Nav.Link href="#pricing">Interview Tips</Nav.Link>
          <NavDropdown title="Job List" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Digital Marketing
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Software Engineer
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Influencer</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link>
            <Link to="/login">Get Started</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </NavbarContainer>
  );
};

export default Header;
