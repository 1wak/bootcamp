import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../assets/css/Header.css";

const Header = () => {
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="position-stiky fixed-top"
      >
        <Link to="/">
          <Navbar.Brand>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <img
                className="logo"
                src="https://res.cloudinary.com/baca-wiki/image/upload/v1614959501/logo_alt6uo.png"
                alt="logo"
              />
            </motion.span>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#services">
              <span>Services</span>
            </Nav.Link>
            <Nav.Link href="/about">
              <span>About Us</span>
            </Nav.Link>
            <Nav.Link href="/about">
              <span>Pricing</span>
            </Nav.Link>
            <Nav.Link href="/about">
              <span>Contact us</span>
            </Nav.Link>
            <Nav.Link href="/about">
              <span>Blog</span>
            </Nav.Link>
          </Nav>
          <Nav>
            <Button>
              <span>Get Started</span>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
