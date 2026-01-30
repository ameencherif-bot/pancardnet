import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/Header.css';

function Header() {
  return (
    <Navbar bg="transparent" variant="dark" expand="lg" sticky="top" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          <strong>PAN Card Central</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs" className="nav-link-custom">
              Blogs
            </Nav.Link>
            <Nav.Link as={Link} to="/blog/resize-tips" className="nav-link-custom">
              Resize Tips
            </Nav.Link>
            <Nav.Link as={Link} to="/blog/document-guide" className="nav-link-custom">
              Document Guide
            </Nav.Link>
            <Nav.Link as={Link} to="/blog/best-practices" className="nav-link-custom">
              Best Practices
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-custom">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
